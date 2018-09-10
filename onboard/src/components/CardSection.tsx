import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={ styles.containerStyle }>
            {props.children}
        </View>
    );
};

const styles: any = {
    containerStyle: {
        height: 90,
        marginBottom: 10,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderRadius: 5
    }
}

export default CardSection;

// borderColor: '#F3866E', 