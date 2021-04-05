import React from 'react'
import {View, TextInput, Button, FlatList, ScrollView, Image} from 'react-native'
import {fetchSearch} from '../component/ImgurAPI'
import ImageForm from '../component/ImageForm'
import styles from "../cssStyles/StyleSheet"

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.bool = false
    this.tag = "" 
    this.state = { 
      clean: false,
      images: [] ,
      accessT: ''
    }
  }

  componentDidMount() {
    this.state.accessT = this.props.navigation.state.params.result.accessToken
    console.log("access token", this.state.accessT)
  }

  componentWillUnmount() {
    this.setState = () => {
      return;
    }
  }

  _parse(data) {
    if (data.images === undefined) {
      console.log("OUI", "undefined")
      this.bool = false
      return
    } else {
      this.bool = true
      return {
        height: data.images[0].height,
        width: data.images[0].width,
        id: data.id,
        cover: data.images[0].id,
        title: data.title,
        account_url: data.account_url,
        favorite: data.images[0].favorite,
        favorite_count: data.favorite_count,
        ups: data.ups,
        downs: data.downs,
        up: false,
        down: false,
      }
  }
}

  _boolcheck(id) {
    for (var i = 0; i < this.state.images.length; i++) {
        if (this.state.images[i] != undefined && this.state.images[i].id === id) {
            return 1
        }
    }
    return 0
}
  

  _text(text) {
    this.tag = text
  }

  _fetchSearch = async () => {
      fetchSearch(this.state.accessT, this.tag).then(data => {
        for (var i = 0; i < data.data.length; i++) {
          if (this._boolcheck(data.data[i].id, this.state.images) == 0 && data.data != undefined) {
              var find_it = this.state.images.concat(this._parse(data.data[i]));
              if (this.bool == false) {
                break
              }
              this.setState({images: find_it})
          }
        }
        if (this.bool == true) {
          this.setState({
            images: [ ...this.state.images, ...data.data ]
          })
        }
        
        console.log(data)
        // this.setState({images: data.data})
      })
  }

  render() {
    return (
      <View style={styles.main_containerSearch}>
        <TextInput style={styles.textinput} placeholder='Tag de la Photo'
          onChangeText={(text) => this._text(text)}
        ></TextInput>
        <Button title='Rechercher' onPress={() => { this._fetchSearch() }}/>
        <FlatList
          data={this.state.images}
          renderItem={({ item }) => <ImageForm image={item} token={this.state.accessT}/>}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.state.images.length > 0) {
                this._fetchSearch()
            }
          }}
        />
      </View>
    )
  }
}

export default Search