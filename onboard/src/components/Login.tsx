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
            validEmail: false,
            validPassword: false,
            data: null
        }
    }
    
    checkCredentials = () => {
        return fetch('https://tq-template-server-sample.herokuapp.com/authenticate', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'password': this.state.password,
                    'email': this.state.email,
                    'rememberMe': 'false', 
                }),
            })
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log('email: ', this.state.email, 'password: ', this.state.password,'ResponseJson: ', responseJson);
                return (responseJson);
            })
            .catch((error) => {
                console.error(error);
            })   
    }

    onPressButton = () => {
        this.setState({loading: true});
        this.checkCredentials()
            .then((data) => {
                console.log(data);
                this.setState({data:data});
                if(data.data==null){
                    alert(data.errors[0].message);
                }
               
            });
         
    };

    onChangeTextInput = (email, password) => {
        var checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var checkPassword = /.{4,}/;

        if (checkEmail.test(email))
            this.setState({validEmail:true, email:email, password:password})
        else
            this.setState({validEmail:false, email:email, password:password})
        if (checkPassword.test(password))
            this.setState({validPassword:true, email:email, password:password});
        else
            this.setState({validPassword:false, email:email, password:password});
        if (checkEmail.test(email) && checkPassword.test(password))
            this.setState({validEmail:true, validPassword:true, email:email, password:password});
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
                                    style={this.state.validEmail? styles.InputValidStyle:styles.InputInvalidStyle}
                                />
                                <Text style={(this.state.validEmail)? styles.validStyle:styles.invalidStyle} >Invalid E-mail !</Text>    
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
                                    style={this.state.validPassword? styles.InputValidStyle : styles.InputInvalidStyle}
                                />
                                <Text style={this.state.validPassword? styles.validStyle:styles.invalidStyle} >Invalid Password !</Text> 
                            </View>    
                        </View>
                    </CardSection>
                    
                </Card>
                <View style={{marginTop: 10, height:50}}>
                <Button 
                    onPress={() => this.onPressButton()}
                    loading={this.state.loading}
                    valid={this.state.validEmail&this.state.validPassword}
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
    InputInvalidStyle:{
        paddingLeft:5, 
        fontSize:17, 
        //flex: 1, 
        height: 40,
        borderRadius: 5, 
        borderColor: '#cc0000', 
        //borderColor: '#fff',    
        //backgroundColor: '#FFA4A4',
        borderWidth: 0.5 
    },
    InputValidStyle:{
        paddingLeft:5, 
        fontSize:17, 
        flex: 1, 
        borderRadius: 5, 
        borderColor: '#FFF', 
        borderWidth: 1 
    },
    textStyle:{
        fontSize: 17, 
        width: 90, 
        paddingBottom: 23
    },
    invalidStyle:{
        fontSize: 13,
        marginTop: 4, 
        color: '#cc0000'
    },
    validStyle:{
        marginTop: 5,
        color: '#fff'
    }
}