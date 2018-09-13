import React, { Component } from 'react';
import Crud from './Crud';

export interface Props {
    navigation: any;
}

class CreateUser extends Component<Props> {
    render() {
        return (
            <Crud 
                token={this.props.navigation.state.params.token} 
                type='create'
                id=''
                nextStep={() => this.props.navigation.navigate('List')}
                button="Create" 
            />
        )
    }
}

export default CreateUser;