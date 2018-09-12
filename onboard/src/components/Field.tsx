import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';
import CardSection from './CardSection';

export interface Props {
    onChangeText(value: string): void;
    secure: boolean;
    placeholder: string;
    value: string;
    valid: boolean;
    invalid: string;
    field: string;
}

class Field extends Component<Props> {
    render(){
        return (
            <CardSection>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>{this.props.field}</Text>
                    <View style={{flex: 1}}>
                        <TextInput
                            secureTextEntry={this.props.secure}
                            placeholder={this.props.placeholder}
                            value={this.props.value}
                            onChangeText={value => this.props.onChangeText(value)}
                            style={ this.props.valid? styles.InputValidStyle : styles.InputInvalidStyle }
                        />
                        <Text style={this.props.valid? styles.validStyle:styles.invalidStyle}> {this.props.invalid}</Text>    
                    </View>    
                </View>
            </CardSection>
        );
    }
}

export default Field;

const styles: any = {
    containerStyle:{
        justifyContent:'flex-start', 
        flexDirection:'row', 
        alignItems:'center', 
        flex: 1, 
        marginLeft: 10, 
        marginRight: 10 
    },
    InputInvalidStyle:{
        paddingLeft:5, 
        fontSize:17, 
        height: 39,
        borderRadius: 5, 
        borderColor: '#cc0000', 
        borderWidth: 0.5 
    },
    InputValidStyle:{
        paddingLeft:5, 
        fontSize:17,  
        height: 39,
        borderRadius: 5, 
        borderColor: '#FFF', 
        borderWidth: 0.5 
    },
    textStyle:{
        fontSize: 17, 
        width: 90, 
        paddingBottom: 23,
        fontWeight: 'bold'
    },
    invalidStyle:{
        fontSize: 13,
        marginTop: 4, 
        color: '#cc0000'
    },
    validStyle:{
        fontSize: 13,
        marginTop: 4,
        color: '#fff'       
    }
}

