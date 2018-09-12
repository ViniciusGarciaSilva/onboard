import React, { Component } from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

export interface Props {
    onPress(): void;
    valid: boolean;
    loading: boolean;
}

class Button extends Component<Props> {
    render() {
        const indicator = <ActivityIndicator size='large' color='#FFF' />;
        const text = <Text style={styles.textStyle}>{this.props.children}</Text>;

        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={this.props.valid ? styles.buttonEnabled : styles.buttonDisabled}
                disabled={this.props.valid ? false : true}>
                {this.props.loading ? indicator : text}
            </TouchableOpacity>
        );
    };
};

const styles: any = {
    textStyle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center'
    },
    buttonEnabled: {
        flex: 1,
        backgroundColor: '#27D7F0',
        borderRadius: 5,
        borderWidth: 0,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        elevation: 1
    },
    buttonDisabled: {
        flex: 1,
        backgroundColor: '#CFCFCF',
        borderRadius: 5,
        borderWidth: 0,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        elevation: 1
    }
}

export default Button;