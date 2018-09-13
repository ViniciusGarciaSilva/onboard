import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import Card from './components/Card';
import CardList from './components/CardList'
import ActionButton from 'react-native-action-button';
import { user } from '../domain/User'

export interface Props {
    navigation: any;
}

interface State {
    pagination: {
        page: number,
        window: number,
        total: number,
        totalPages: number
    };
    users: user[]; 
    page: number;
}

class List extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            pagination:{
                page: 0,
                window: 0,
                total: 0,
                totalPages: 0    
            },
            users: [],
            page: 1
        }
    }

    onPressButton = () => {
        this.props.navigation.navigate('CreateUser', { token: this.props.navigation.state.params.token });
    }

    onPressUser = (item: any) => {
        console.log('ListScreen/onPressButton -> item:', item)
        this.props.navigation.navigate('Detail', { token: this.props.navigation.state.params.token, id: item.id });
    }

    handleLoadMore = () => {
        var page = this.state.page;
        page++;
        this.setState({ page: page })
        this.getUsers(page, 5)
            .then((response) => {
                console.log(response);
                this.setState({ users: [...this.state.users, ...response.data], pagination: response.pagination});
            })
    }

    componentDidMount = () => {
        this.getUsers(0, 10)
            .then((response) => {
                console.log(response);
                this.setState({ users: [...this.state.users, ...response.data], pagination: response.pagination});           
            })
    }

    getUsers = (page: any, window: any) => {
        return fetch('https://tq-template-server-sample.herokuapp.com/users?pagination={"page": ' + page + ' , "window": ' + window + '}', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: this.props.navigation.state.params.token
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('ListScreen/getUsers -> responseJson: : ', responseJson);
                return (responseJson);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        return (
            <Card>
                <FlatList
                    data={this.state.users}
                    renderItem={({ item }: any) =>
                        <CardList onPress={() => this.onPressUser(item)}>
                            <Text style={styles.nameStyle}> {item.name} </Text>
                            <Text style={styles.roleStyle}> {item.role} </Text>
                        </CardList>
                    }
                    keyExtractor={(item: { id: number }) => String(item.id)}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={.3}
                />
                <ActionButton buttonColor="#27D7F0" onPress={() => this.onPressButton()} />
            </Card>
        );
    }
}

export default List;

const styles: any = {
    nameStyle: {
        fontSize: 18,
        color: '#000'
    },
    roleStyle: {
        fontSize: 15,
        color: '#000'
    }
}