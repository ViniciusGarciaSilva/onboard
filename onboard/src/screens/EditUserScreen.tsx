import React, { Component } from 'react';
import Crud from '../components/Crud';

export interface Props {
    navigation: any;
    id: string;
}

class EditUser extends Component<Props> {
    render() {
        return (
            <Crud 
                authorization={this.props.navigation.state.params.token} 
                type='Put'
                id={this.props.id}
                nextStep={() => this.props.navigation.navigate('List')}
                button="Edit" 
            />
        )
    }
}

export default EditUser;