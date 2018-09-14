import React, { Component } from 'react';
import Crud from './Createdit';
import {user} from '../../domain/User'

export interface Props {
    navigation: any;
}

class EditUser extends Component<Props> {
    
    render() {
        return (
            <Crud 
                token={this.props.navigation.state.params.token} 
                type='Put'
                nextStep={() => this.props.navigation.navigate('List')}
                button="Edit"
                user={this.props.navigation.state.params.user}
            />
        )
    }
}

export default EditUser;