// Index.ios.js - place code in here for IOS

// Import a libray to help create a component
import React from 'react';
import { AppRegistry, View, Text} from 'react-native';
import Header from './src/components/Header';
import Login from './src/components/Login'

// Create a component
const App = () => {
    return (
    <View>
        <Header />
        <Login />
    </View>
    ); 
};

// Render it to the device
AppRegistry.registerComponent('onboard', () => App );