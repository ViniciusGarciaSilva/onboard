import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import Field from '../components/Field'

export interface Props {
    navigation: any;
}

interface State {
    password: string;
    email: string;
    loading: boolean;
    validEmail: boolean;
    validPassword: boolean;
    data: any;
}

class Login extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: 'admin@taqtile.com',
            password: '1111',
            loading: false,
            validEmail: true,
            validPassword: true,
            data: null
        };
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
                return (responseJson);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    onPressButton = () => {
        this.setState({ loading: true });
        this.checkCredentials()
            .then((data) => {
                this.setState({ data: data, loading: false });
                if (data.data == null)
                    alert(data.errors[0].message);
                else
                    this.props.navigation.navigate('List', { token: data.data.token });
            });
    };

    onChangeMail = (email: any) => {
        var checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.setState({ email: email });

        if (checkEmail.test(email))
            this.setState({ validEmail: true });
        else
            this.setState({ validEmail: false });

    }

    onChangePassword = (password: any) => {
        var checkPassword = /.{4,}/;
        this.setState({ password: password });

        if (checkPassword.test(password))
            this.setState({ validPassword: true });
        else
            this.setState({ validPassword: false });
    }

    render() {
        return (
            <Card>
                <Field
                    field="Login"
                    secure={false}
                    placeholder="user@gmail.com"
                    value={this.state.email}
                    onChangeText={this.onChangeMail}
                    valid={this.state.validEmail}
                    invalid="Invalid E-mail !" >
                </Field>
                <Field
                    field="Password"
                    secure={true}
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={this.onChangePassword}
                    valid={this.state.validPassword}
                    invalid="Invalid Password !">
                </Field>
                <View style={{ marginTop: 10, height: 50 }}>
                    <Button
                        onPress={() => this.onPressButton()}
                        loading={this.state.loading}
                        valid={this.state.validEmail && this.state.validPassword}>
                        Login
                    </Button>
                </View>
            </Card>
        )
    }
}

export default Login;