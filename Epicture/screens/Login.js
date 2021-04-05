import React from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native'
import styles from "../cssStyles/StyleSheet"
import { authorize } from 'react-native-app-auth';

const config = {
  issuer: 'https://api.imgur.com/',
  clientId: '11c8dcf7a8431a2',
  clientSecret: 'dc999efa0e179e03c9d85752b311b57ee8f6d7df',
  redirectUrl: 'com.epicture://callback',
  serviceConfiguration: {
    authorizationEndpoint: 'https://api.imgur.com/oauth2/authorize',
    tokenEndpoint: 'https://api.imgur.com/oauth2/token',
    revocationEndpoint: 'https://api.imgur.com/oauth2/revoke'
  }
}; 

class Login extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			loadingLog: false
		}
	}

  _webview = async () => {
    try {
			const result = await authorize(config);
      console.log(result)
      // this.props.navigation.navigate("Search", { result } )
      this.props.navigation.navigate("Menu", { result } )
		} catch(error) {
			console.log(error);
		}
  }

  render(){
    return (
        <View style={styles.container}>
          <Image style={styles.logo} source = {require("../assets/imgurLogo.png")}/>
          <TouchableOpacity 
            style={styles.loginBtn}
            loading={ this.state.loadingLog }
            onPress={() => this._webview()
            }>
            <Text style={styles.text22} >LOGIN</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

export default Login
