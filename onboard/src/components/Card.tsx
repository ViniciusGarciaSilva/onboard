import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={ styles.containerStyle }>
            {props.children}
        </View>
    );
};

const styles: any = {
    containerStyle: {
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    }
}

export default Card;