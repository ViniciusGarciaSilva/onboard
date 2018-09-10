import React, {Component} from 'react';
import {Text, TextInput, View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            valid: false
        }
    }
    
    onPressButton = () => {
        this.setState({loading: true});
    };

    onChangeTextInput = (email, password) => {
        var checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var checkPassword = /.{4,}/;

        if (!checkEmail.test(email))
            this.setState({valid:false, email:email, password:password});
        if (!checkPassword.test(password))
            this.setState({valid:false, email:email, password:password});
        if (checkEmail.test(email) && checkPassword.test(password))
            this.setState({valid:true, email:email, password:password});
    };
     
    render(){
        return(
            <View style={{justifyContent: 'center', height: 300}}>
                <Card>
                    <CardSection>
                        <View style={styles.containerStyle}>
                            <Text style={styles.textStyle}>E-mail: </Text>
                            <View style={{flex: 1}}>
                                <TextInput
                                    placeholder="user@gmail.com"
                                    value={this.state.email}
                                    onChangeText={ email => this.onChangeTextInput(email, this.state.password)}
                                    style={styles.textInputStyle}
                                />
                                <Text style={styles.invalidStyle} >Invalid E-mail !</Text>    
                            </View>    
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.containerStyle}>
                            <Text style={styles.textStyle} >Password: </Text>
                            <View style={{flex: 1}}>
                                <TextInput
                                    secureTextEntry
                                    placeholder="password"
                                    value={this.state.password}
                                    onChangeText={password => this.onChangeTextInput(this.state.email, password)}
                                    style={styles.textInputStyle}
                                />
                                <Text style={styles.invalidStyle} >Invalid Password !</Text> 
                            </View>    
                        </View>
                    </CardSection>
                    
                </Card>
                <View style={{marginTop: 10, height:50}}>
                <Button 
                    onPress={() => this.onPressButton()}
                    loading={this.state.loading}
                    valid={this.state.valid}
                >
                    Login
                </Button>
                </View>
            </View>
        )
    };
};

export default Login;

const styles: any = {
    containerStyle:{
        justifyContent:'flex-start', 
        flexDirection:'row', 
        alignItems:'center', 
        flex: 1, 
        marginLeft: 10, 
        marginRight: 10 
    },
    textInputStyle:{
        paddingLeft:5, 
        fontSize:18, 
        flex: 1, 
        borderRadius: 5, 
        borderColor: '#cc0000', 
        borderWidth: 1 
    },
    textStyle:{
        fontSize: 18, 
        width: 100, 
        paddingBottom: 20
    },
    invalidStyle:{
        marginTop: 5, 
        color: '#cc0000'
    }
}