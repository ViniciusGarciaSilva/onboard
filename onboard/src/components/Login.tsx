import React, {Component} from 'react';
import {Text, TextInput } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection'


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: '',
        }
    }

    onSelectButton = (email) => {
        console.log("OLAR");
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email))
            console.log("True");
        else   
            console.log("False");
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
                        value={this.state.senha}
                        onChangeText={senha => this.setState({ senha })}
                        style={{height: 20, width: 200}}
                    />
                </CardSection>
    
                <CardSection>
                    <Button
                        onClick={() => this.onSelectButton(this.state.email)}
                    >
                        Login
                    </Button>
                </CardSection>
    
            </Card>
        )
    }
}

export default Login;