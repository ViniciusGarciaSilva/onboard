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
            loading: false
        }
    }
    onPressButton = (email, password) => {
        var checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var checkPassword = /.{4,}/;

        if (checkEmail.test(email))
            if (checkPassword.test(password))
                this.setState({loading: true});
            else
                alert('Please insert a valid password!');
        else   
            alert('Please insert a valid e-mail!');
    } 
    render(){
        return(
            <Card>
                <CardSection>
                    <View style={{justifyContent:'center', flexDirection:'row'}}>
                        <Text style={{alignSelf:'center', fontSize: 20}}>E-mail: </Text>
                        <TextInput
                            placeholder="user@gmail.com"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            style={{ alignSelf:'center', fontSize:20, width: 250}}
                        />
                    </View>
                </CardSection>
                <CardSection>
                    <View style={{justifyContent:'center', flexDirection:'row'}}>
                        <Text style={{alignSelf:'center', fontSize: 20}} >Password: </Text>
                        <TextInput
                            secureTextEntry
                            placeholder="password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            style={{alignSelf:'center', fontSize:20, width: 250}}
                        />    
                    </View>
                </CardSection>
                <View style={{height:50}}>
                    <Button onPress={() => this.onPressButton(this.state.email, this.state.password)}
                            loading={this.state.loading}>
                        Login
                    </Button>
                </View>
            </Card>
        )
    }
}

export default Login;

const styles = {
    textStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}