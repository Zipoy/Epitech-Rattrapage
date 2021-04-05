import React from 'react'
import {FlatList, Text, SafeAreaView} from 'react-native'
import {fetchFavorisGet} from "../component/ImgurAPI";
import ImageFormFav from "../component/ImageFormFav";
import styles from "../cssStyles/StyleSheet"

class FavImage extends React.Component {
    constructor(props) {
        super(props);
        this.user = ""
        this.state = {
            images: [],
            accessToken: ''
        }
    }

    componentDidMount() {
        this.user = this.props.navigation.state.params.result.tokenAdditionalParameters.account_username
        this.state.accessToken = this.props.navigation.state.params.result.accessToken
        fetchFavorisGet(this.state.accessToken, this.user).then((data) => {
            this.setState({
                images: data.data
            });
            console.log(data)
        });
        console.log(this.user)
        console.log(this.state.accessToken)
    }

    componentWillUnmount() {
        this.setState = () => {
            return;
        }
    }

    _fetchFavoris() {
        fetchFavorisGet(this.state.accessToken, this.user).then((data) => {
            this.setState({
                images: data.data
            });
            console.log("OUI", this.state.images)
        }
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.main_container}>
                
                <Text style={{ ...styles.title }}>
                    Imgur account :        {this.user}
                </Text>
                <FlatList
                    data={this.state.images}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ImageFormFav image={item} token={this.state.accessToken}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        this._fetchFavoris();
                    }}
                />
            </SafeAreaView >
        );
    }
}


export default FavImage