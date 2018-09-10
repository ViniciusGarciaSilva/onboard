import { AppRegistry} from 'react-native';
import Login from './src/screens/Login';
import { createStackNavigator } from 'react-navigation';
import Welcome from './src/screens/Welcome'

const App = createStackNavigator(
    {
        Login: { screen: Login},
        Welcome: { screen: Welcome}
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            title: 'Onboard',
            headerStyle:{
                backgroundColor: '#27D7F0',
                height: 60,
                paddingTop: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                elevation: 2
            },
            headerTitleStyle:{
                fontWeight: 'bold',
                fontSize: 20
            }
        }
    }
);

AppRegistry.registerComponent('onboard', () => App );