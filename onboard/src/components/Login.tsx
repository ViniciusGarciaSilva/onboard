import React, {Component} from 'react';
import {Text, TextInput, Image, View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection'


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onPressButton = (email, password) => {
        var checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var checkPassword = /.{4,}/;

        if (checkEmail.test(email))
            if (checkPassword.test(password))
                alert('PARABENS JOVI');
            else
                alert('Please insert a valid password!');
        else   
            alert('Please insert a valid e-mail!');
    }    

    render(){
        return(
            <Card>
                <CardSection>
                    <Text>E-mail: </Text>
                    <TextInput
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        style={{height: 20, width: 200}}
                    />
                </CardSection>
    
                <CardSection>
                    <Text>Senha: </Text>
                    <TextInput
                        secureTextEntry
                        placeholder="senha"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        style={{height: 20, width: 200}}
                    />
                </CardSection>
    
                <CardSection>
                    <Button
                        onPress={() => this.onPressButton(this.state.email, this.state.password)} >
                        Login
                    </Button>
                </CardSection>
                

            </Card>
        )
    }
}

export default Login;