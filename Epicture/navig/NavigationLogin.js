import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer'

// // import FavImage from '../components/FavImage'
// // import Search from '../components/SearchImage'
import User from '../screens/UserImage'
import Menu from './Menu'
import Login from '../screens/Login'
import Search from '../screens/SearchImage'
import Favorites from '../screens/FavImage'

// const DrawerNavigator = createDrawerNavigator({
//     User: {
//         screen: User,
//         navigationOptions: {
//             drawerLabel: "Profile "
//         }
//     }
//     // Favorites: {
//     //     screen: FavImage,
//     //     navigationOptions: {
//     //         drawerLabel: "Favorites "
//     //     }
//     // },
//     // Search: {
//     //     screen: Search,
//     //     navigationOptions: {
//     //         drawerLabel: "Search "
//     //     }
//     // }
// })

const LoginStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            title: "Profile"
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Search"
        }
    },
    Menu: {
        screen: Menu,
        navigationOptions: {
            title: "MENU"
        }
    },
    Fav: {
        screen: Favorites,
        navigationOptions: {
            title: "Favorites"
        }
    }
})

export default createAppContainer(LoginStackNavigator)
