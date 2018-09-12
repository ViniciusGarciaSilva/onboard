import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import Field from '../components/Field';
import Button from '../components/Button';
import Picker from '../components/Picker';
import { user } from '../components/User'

export interface Props {
  authorization: any;
  type: string;
  id: string;
  nextStep(): void;
  button: String;
}

interface State {
  user: user,
  validName: boolean;
  validEmail: boolean;
  validPassword: boolean;
  validRole: boolean;
  loading: boolean;
  pickerItems: any;
  data: any;
  item: any;
}

class Crud extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {
        id: 0,
        name: '',
        password: '',
        email: '',
        active: false,
        role: '',
        createdAt: '',
        updatedAt: '',
      },
      validName: false,
      validEmail: false,
      validPassword: false,
      validRole: false,
      loading: false,
      pickerItems: [
        { label: 'Admin', value: 'admin', },
        { label: 'User', value: 'user', },
      ],
      data: null,
      item: null
    };
  }

  createUser = () => {
    return fetch('https://tq-template-server-sample.herokuapp.com/users' + this.props.id, {
      method: this.props.type,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.props.authorization
      },
      body: JSON.stringify({
        "name": this.state.user.name,
        "password": this.state.user.password,
        "email": this.state.user.email,
        "role": this.state.user.role
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

  onChangeRole = (role: string) => {
    const newUser = this.state.user;
    newUser.role = role;
    this.setState({ user: newUser });

    if (role == 'admin' || role == 'user')
      this.setState({ validRole: true });
    else
      this.setState({ validRole: false });
    console.log("state.role: ", this.state.user.role, "role:", role);
  }

  onChangeName = (name: string) => {
    var checkName = /^[a-zA-Z]+$/;
    const newUser = this.state.user;
    newUser.name = name;
    this.setState({ user: newUser });

    if (checkName.test(name))
      this.setState({ validName: true });
    else
      this.setState({ validName: false });
  }

  onChangeEmail = (email: string) => {
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
    var checkPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    const newUser = this.state.user;
    newUser.password = password;
    this.setState({ user: newUser });
    
    if (checkPassword.test(password))
      this.setState({ validPassword: true });
    else
      this.setState({ validPassword: false });
  }

  onPressButton = () => {
    this.setState({ loading: true });
    this.createUser()
      .then((response) => {
        console.log(response);
        this.setState({ loading: false, data: response });
        if (response.data == null)
          alert(response.errors[0].message);
        else {
          alert("Success!!");
          this.props.nextStep();
        }
      })
  }

  render() {
    return (
      <Card>
        <Field
          field="Name"
          secure={false}
          placeholder="name"
          value={this.state.user.name}
          onChangeText={this.onChangeName}
          valid={this.state.validName}
          invalid="Invalid Name !" >
        </Field>
        <Field
          field="E-mail"
          secure={false}
          placeholder="e-mail"
          value={this.state.user.email}
          onChangeText={this.onChangeEmail}
          valid={this.state.validEmail}
          invalid="Invalid E-mail !">
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
        <Picker
          pickerItems={this.state.pickerItems}
          onValueChange={this.onChangeRole}
          item={this.state.item}
          field="Role"
          secure={false}
          placeholder={{
            label: 'select a role',
            value: null,
          }} />
        <View style={{ marginTop: 10, height: 50 }}>
          <Button
            onPress={() => this.onPressButton()}
            loading={this.state.loading}
            valid={
              this.state.validEmail &&
              this.state.validPassword &&
              this.state.validName &&
              this.state.validRole}>
            {this.props.button}
          </Button>
        </View>
      </Card>
    )
  }
}

export default Crud;