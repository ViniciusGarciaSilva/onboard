import React, {Component} from 'react';
import {Text, FlatList, View } from 'react-native';
import Card from '../components/Card';
import CardList from '../components/CardList'

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        this.getUsers(0,10)
        .then( (data) => {
            console.log(data);
            this.setState( {data: data} );
        })
    }

    getUsers = (page:any, window:any) => {
        return fetch('https://tq-template-server-sample.herokuapp.com/users?pagination={"page": '+page+' , "window": '+window+'}', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: this.props.navigation.state.params.token
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('responseJson: ', responseJson);
                return (responseJson);
            })
            .catch((error) => {
                console.error(error);
            })   
    }

    render(){
        return (
            <Card>
                <FlatList
                    data={this.state.data.data}
                    renderItem={({item}) => 
                        <CardList>  
                            <Text style={styles.nameStyle}> {item.name} </Text>
                            <Text style={styles.roleStyle}> {item.role} </Text>  
                        </CardList>
                    }
                    keyExtractor={ ( item ) => String(item.id)}
                />

            </Card>
        );
    }
}

export default List;

const styles: any = {
    nameStyle:{
        fontSize: 18,
        color: '#000'
    },
    roleStyle:{
        fontSize: 15,
        color: '#000'
    }
}