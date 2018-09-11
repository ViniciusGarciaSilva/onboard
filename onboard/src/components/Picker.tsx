import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardSection from './CardSection';
import RNPickerSelect from 'react-native-picker-select';

class Picker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null
        }
    }

    onValueChange = (value: any) => {
        this.setState({ value:value });
        this.props.onValueChange(value);
    }
    
    render(){
        return (
            <CardSection>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>{this.props.field}</Text>
                    <View style={{flex: 1}}>
                        <RNPickerSelect
                            items={this.props.pickerItems}
                            placeholder={this.props.placeholder}
                            onValueChange={value => this.onValueChange(value)}
                            style={{ ...pickerSelectStyles }}  
                            value={this.state.value}>
                        </RNPickerSelect>
                    </View>    
                </View>
            </CardSection>
        );
    }
}

export default Picker;


const styles: any = {
    containerStyle:{
        justifyContent:'flex-start', 
        flexDirection:'row', 
        alignItems:'center', 
        flex: 1, 
        marginLeft: 10, 
        marginRight: 10,
        paddingBottom: 14 
    },
    textStyle:{
        fontSize: 17, 
        width: 90, 
        paddingBottom: 5,
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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        paddingLeft:5,
        fontSize: 17,
        height: 39,
        borderRadius: 5, 
        borderColor: '#000', 
        borderWidth: 0.5,
        color: 'black'
    },
});