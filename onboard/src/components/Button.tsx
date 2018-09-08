import React, {Component} from 'react';
import {Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';

class Button extends Component {

    render(){
        let buttonContent;
        const indicator = <ActivityIndicator />;
        const text = <Text style={styles.textStyle}>{this.props.children}</Text>;

        return(
            <TouchableOpacity   
                onPress={this.props.onPress} 
                style={styles.buttonStyle}
                disabled={this.props.valid? true : false}>
                {this.props.loading? indicator : text }
            </TouchableOpacity>
        );
    }
};

const styles: any = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        height: 50,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center'
    }
}

export default Button;