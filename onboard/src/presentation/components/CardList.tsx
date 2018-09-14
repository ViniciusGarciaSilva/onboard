import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export interface Props {
    onPress(): void;
}

class CardList extends Component<Props> {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.containerStyle}
            >
                {this.props.children}
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 90,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        flexDirection: 'column',
        borderRadius: 5
    }
});

export default CardList;
