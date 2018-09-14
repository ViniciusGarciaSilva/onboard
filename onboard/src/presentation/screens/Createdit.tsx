import React, { Component } from 'react';
import { View } from 'react-native';
import Card from '../components/Card';
import Field from '../components/Field';
import Button from '../components/Button';
import Picker from '../components/Picker';
import { user, createUser, editUser } from '../../domain/User'
import { checkEmail, checkName, checkPassword7, checkRole } from '../../domain/Validator'

export interface Props {
  token: any;
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

  onChangeRole = (role: string) => {
    const newUser = this.state.user;
    newUser.role = role;
    this.setState({ user: newUser, validRole: checkRole(role) });
  }

  onChangeName = (name: string) => {
    const newUser = this.state.user;
    newUser.name = name;
    this.setState({ user: newUser, validName: checkName(name) });
  }

  onChangeEmail = (email: string) => {
    const newUser = this.state.user;
    newUser.email = email;
    this.setState({ user: newUser, validEmail: checkEmail(email) });
  }

  onChangePassword = (password: string) => {
    const newUser = this.state.user;
    newUser.password = password;
    this.setState({ user: newUser, validPassword: checkPassword7(password) });
  }

  onPressButton = () => {
    this.setState({ loading: true });
    switch (this.props.type) {
      case "create":
        createUser(this.state.user, this.props.token).then((response: any) => {
          alert("User created!")
          this.setState({ loading: false, user: response });
          this.props.nextStep();
        })
      case "edit":
        editUser(this.state.user, this.props.token).then((response: any) => {
          alert("User edited!")
          this.setState({ loading: false, user: response });
          this.props.nextStep();
        })
    }
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