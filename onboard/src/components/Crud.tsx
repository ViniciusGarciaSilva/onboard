import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import Field from '../components/Field';
import Button from '../components/Button';
import Picker from '../components/Picker';

export interface Props {
  authorization: any;
  type: string;
  id: string;
  nextStep(): void;
  button: String;
}

interface State {
  name: string;
  password: string;
  email: string;
  role: string;
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
      name: '',
      email: '',
      password: '',
      role: '',
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
        "name": this.state.name,
        "password": this.state.password,
        "email": this.state.email,
        "role": this.state.role
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

  onChangeRole = (role: any) => {
    this.setState({ role: role });
    if (role == 'admin' || role == 'user')
      this.setState({ validRole: true });
    else
      this.setState({ validRole: false });
    console.log("state.role: ", this.state.role, "role:", role);
  }

  onChangeName = (name: any) => {
    var checkName = /^[a-zA-Z]+$/;
    this.setState({ name: name });

    if (checkName.test(name))
      this.setState({ validName: true });
    else
      this.setState({ validName: false });
  }

  onChangeEmail = (email: any) => {
    var checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.setState({ email: email });

    if (checkEmail.test(email))
      this.setState({ validEmail: true });
    else
      this.setState({ validEmail: false });

  }

  onChangePassword = (password: any) => {
    var checkPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    this.setState({ password: password });

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
          value={this.state.name}
          onChangeText={this.onChangeName}
          valid={this.state.validName}
          invalid="Invalid Name !" >
        </Field>
        <Field
          field="E-mail"
          secure={false}
          placeholder="e-mail"
          value={this.state.email}
          onChangeText={this.onChangeEmail}
          valid={this.state.validEmail}
          invalid="Invalid E-mail !">
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