import React, { Component } from 'react';
import Crud from './Createdit';

export interface Props {
    navigation: any;
}

class CreateUser extends Component<Props> {
    
    
    render() {
        const user= {
            id: 0,
            name: '',
            password: '',
            email: '',
            active: false,
            role: '',
            createdAt: '',
            updatedAt: '',
        }
        
        return (
            <Crud 
                token={this.props.navigation.state.params.token} 
                type='create'
                nextStep={() => this.props.navigation.navigate('List')}
                button="Create"
                user={user}
            />
        )
    }
}

export default CreateUser;