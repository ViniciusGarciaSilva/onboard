import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import Field from '../components/Field'
import { user, validateUser } from '../../domain/User'
import { checkEmail, checkPassword4 } from '../../domain/Validator';

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

    onPressButton = () => {
        this.setState({ loading: true });
        validateUser(this.state.user.email, this.state.user.password)
            .then((response: any) => {
                this.setState({ user: response.user, loading: false, validPassword: false });
                this.props.navigation.navigate('List', { token: response.token });
            })
            .catch((error: any) => {
                alert(error);
            })
    };

    onChangeMail = (email: string) => {
        const newUser = this.state.user;
        newUser.email = email;
        this.setState({ user: newUser, validEmail: checkEmail(email) });
    }

    onChangePassword = (password: string) => {
        const newUser = this.state.user;
        newUser.password = password;
        this.setState({ user: newUser, validPassword: checkPassword4(password) });
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