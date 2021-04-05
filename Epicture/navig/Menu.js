import React from 'react';
import styles from "../cssStyles/StyleSheet"
import { View, Text, TouchableOpacity } from 'react-native';

class chooseScreen extends React.PureComponent {
    constructor(props) {
        super(props)
      }

    _navUser = async () => {
        try {
            const result = this.props.navigation.state.params.result
            console.log(result)
          // this.props.navigation.navigate("Search", { result } )
            this.props.navigation.navigate("User", { result } )
            } catch(error) {
                console.log(error);
            }
      }

    _navSearch = async () => {
        try {
            const result = this.props.navigation.state.params.result
            console.log(result)
          // this.props.navigation.navigate("Search", { result } )
            this.props.navigation.navigate("Search", { result } )
            } catch(error) {
                console.log(error);
            }
      }

    _navFav = async () => {
        try {
            const result = this.props.navigation.state.params.result
            console.log(result)
          // this.props.navigation.navigate("Search", { result } )
            this.props.navigation.navigate("Fav", { result } )
            } catch(error) {
                console.log(error);
            }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
                <TouchableOpacity  style={styles.appButtonContainer} onPress={() => this._navUser() }>
                    <Text style={styles.appButtonText}> User Screen </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.appButtonContainer} onPress={() => this._navSearch()}>
                    <Text style={styles.appButtonText}> Search Screen </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.appButtonContainer} onPress={() => this._navFav()}>
                    <Text style={styles.appButtonText}> Favorites Screen </Text>
                </TouchableOpacity>
            </View>
    );
  }
}

export default chooseScreen;