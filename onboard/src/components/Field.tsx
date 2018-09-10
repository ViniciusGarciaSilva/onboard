import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Campo = (props) => {
    return (
        <View style={{ styles.containerStyle }}>
                        <Text style={{styles.nameStyle}}>this.props.name </Text>
                        <TextInput
                            placeholder={this.props.placeholder}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            style={styles.inputStyl}
                        />
        </View>
    );
};


const styles: any = {
    nameStyle:{
        paddingLeft: 10, 
        alignSelf:'center', 
        fontSize: 20
    },
    inputStyle: {
        paddingLeft: 10,
        alignSelf:'center',
        fontSize:20,
        height:20,
        width:'100%'
    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        margintoP: 10
    }
}

//<View style={ styles.containerStyle }>
//{props.children}
//</View>

export default Card;