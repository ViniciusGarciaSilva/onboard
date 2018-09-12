import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import Field from '../components/Field'
import { user } from '../components/User'

export interface Props {
    navigation: any;
}

interface State {
    user: user;
    loading: boolean;
    validEmail: boolean;
    validPassword: boolean; 
}

class Login extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: {
                id: 0,
                name: '',
                password: '1111',
                email: 'admin@taqtile.com',
                active: false,
                role: '',
                createdAt: '',
                updatedAt: '',
            },
            loading: false,
            validEmail: true,
            validPassword: true,
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
                'password': this.state.user.password,
                'email': this.state.user.email,
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
            .then((response) => {
                this.setState({ user: response.data.user, loading: false });
                if (response.data == null)
                    alert(response.errors[0].message);
                else
                    this.props.navigation.navigate('List', { token: response.data.token });
            });
    };

    onChangeMail = (email: string) => {
        var checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const newUser = this.state.user;
        newUser.email = email;
        this.setState({ user: newUser });

        if (checkEmail.test(email))
            this.setState({ validEmail: true });
        else
            this.setState({ validEmail: false });

    }

    onChangePassword = (password: string) => {
        var checkPassword = /.{4,}/;
        const newUser = this.state.user;
        newUser.password = password;
        this.setState({ user: newUser });

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
                    value={this.state.user.email}
                    onChangeText={this.onChangeMail}
                    valid={this.state.validEmail}
                    invalid="Invalid E-mail !" >
                </Field>
                <Field
                    field="Password"
                    secure={true}
                    placeholder="password"
                    value={this.state.user.password}
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