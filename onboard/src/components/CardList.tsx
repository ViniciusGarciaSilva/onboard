import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

class CardList extends Component {

    render(){
        return (
            <TouchableOpacity 
                onPress={this.props.onPress} 
                style={ styles.containerStyle }
            >
                {this.props.children}
            </TouchableOpacity>
        );
    }   
};

const styles: any = {
    containerStyle: {
        height: 90,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        flexDirection: 'column',
        borderRadius: 5
    }
}

export default CardList;
