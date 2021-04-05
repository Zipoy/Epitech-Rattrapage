import React from 'react'
import { View, Image, Dimensions, Text, TouchableOpacity} from 'react-native'
import {fetchFavorisPost, fetchVotes} from "../component/ImgurAPI";
import styles from "../cssStyles/StyleSheet"

class ImageForm extends React.Component {
  render() {
    const token = this.props.token
    const Height = Number((this.props.image.height * (Dimensions.get('window').width / this.props.image.width)).toFixed(0))
    const image = this.props.image
    const imageID = (image.cover === undefined) ? image.id : image.cover
    console.log("FORM", imageID)
    console.log(fetchVotes(this.props.token, imageID))
  
    return (
      <View style={styles.main_containerForm}>
        <View style={styles.Header}>
            <Text style={styles.title}>{"name:  " + image.title}</Text>
            <Text style={styles.time}>{"user:   " + image.account_url}</Text>
        </View>
        <View style={styles.image}>
          <Image style={{ height: Height, width: Dimensions.get('window').width, resizeMode: 'stretch' }} source={{ uri: 'https://i.imgur.com/' + imageID + '.jpg' }} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Text style={styles.title}>{"UP votes: " + fetchVotes(this.props.token, imageID)._U}</Text>
          <Text style={styles.title}>{"DOWN votes: " + fetchVotes(this.props.token, imageID)._V}</Text> */}
          <TouchableOpacity 
              style={styles.imageLIKE}
              onPress={() => (fetchFavorisPost(token, imageID), console.log("token:", token ,"imageID", imageID))
              }>
                <Image
              source= {require("../assets/LIKE.jpg")}
              style={styles.buttonImageIconStyle}
            />
              <Text style={styles.textLIKE} >LIKE</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default ImageForm