import React, {Component} from 'react';
import {Text, FlatList, View } from 'react-native';
import Card from '../components/Card';
import CardList from '../components/CardList'

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                { key: 'Vinicius 1',  name: 'Vinicius',   role: 'Estagiário 1'},
                { key: 'Douglas 1',   name: 'Douglas',    role: 'Estagiário 2'},
                { key: 'Everaldo 1',  name: 'Everaldo',   role: 'Estagiário 3'},
                { key: 'Vinicius 2',  name: 'Vinicius',   role: 'Estagiário 4'},
                { key: 'Douglas 2',   name: 'Douglas',    role: 'Estagiário 5'},
                { key: 'Everaldo 2',  name: 'Everaldo',   role: 'Estagiário 6'},
                { key: 'Vinicius 3',  name: 'Vinicius',   role: 'Estagiário 7'},
                { key: 'Douglas 3',   name: 'Douglas',    role: 'Estagiário 8'},
                { key: 'Everaldo 3',  name: 'Everaldo',   role: 'Estagiário 9'},
                { key: 'Vinicius 4',  name: 'Vinicius',   role: 'Estagiário 10'},
                { key: 'Douglas 4',   name: 'Douglas',    role: 'Estagiário 11'},
                { key: 'Everaldo 4',  name: 'Everaldo',   role: 'Estagiário 12'}

            ]
        }
    }
    
    render(){
        return (
            <Card>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => 
                        <CardList>  
                            <Text style={styles.nameStyle}> {item.name} </Text>
                            <Text style={styles.roleStyle}> {item.role} </Text>  
                        </CardList>
                    }
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