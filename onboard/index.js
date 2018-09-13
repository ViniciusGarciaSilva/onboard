import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/presentation/LoginScreen';
import List from './src/presentation/ListScreen';
import Detail from './src/presentation/DetailScreen';
import CreateUser from './src/presentation/CreateUserScreen';
import EditUser from './src/presentation/EditUserScreen';

const App = createStackNavigator(
    {
        Login: { screen: Login },
        List: { screen: List },
        Detail: { screen: Detail },
        CreateUser: { screen: CreateUser },
        EditUser: { screen: EditUser }
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            title: 'Onboard',
            headerStyle: {
                backgroundColor: '#27D7F0',
                height: 60,
                paddingTop: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                elevation: 2
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20
            }
        }
    }
);

AppRegistry.registerComponent('onboard', () => App);