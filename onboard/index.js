import { AppRegistry} from 'react-native';
import Login from './src/screens/LoginScreen';
import { createStackNavigator } from 'react-navigation';
import List from './src/screens/ListScreen'

const App = createStackNavigator(
    {
        Login: { screen: Login},
        List: { screen: List}
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