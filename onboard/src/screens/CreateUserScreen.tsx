import React, { Component } from 'react';
import Crud from '../components/Crud';

export interface Props {
    navigation: any;
}

class CreateUser extends Component<Props> {
    render() {
        return (
            <Crud 
                authorization={this.props.navigation.state.params.token} 
                type='POST'
                id=''
                nextStep={() => this.props.navigation.navigate('List')}
                button="Create" 
            />
        )
    }
}

export default CreateUser;