import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'white'
    },
    getflex: {
        flex: 1
    },
    scrollView: {
		backgroundColor: '#181817',
		justifyContent: 'center',
		padding: 20
	},
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    main_containerForm: {
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    main_containerSearch: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageLIKE: {
        flexDirection: 'row',
        justifyContent: "flex-start"
    },
    appButtonContainer: {
        
        elevation: 10,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 300
        
    },
    buttonImageIconStyle: {
        padding: 5,
        height: 40,
        width: 40,
        resizeMode: 'stretch'
      },
    appButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    Header: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        flex: 1,
    },
    time: {
        fontSize: 17,
        color: "black",
        marginTop: 5
    },
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
      width: 256,
      height: 92,
      marginBottom: 40
    },
    loginBtn: {
      width: 100,
      borderRadius: 25,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
    text: {
      fontSize: 20,
      color: 'black',
      overflow: 'hidden'
    },
    text22: {
        fontSize: 20,
        color: 'white',
        overflow: 'hidden'
      },
    textLIKE: {
        fontSize: 20,
        color: 'black',
      overflow: 'hidden'
      }
});

export default styles