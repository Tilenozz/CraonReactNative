import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CurrentValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { color, children } = this.props
        return (
            <View style={styles.container(color)}>
                <Text style={{ color: 'blue', fontSize: 50 }}> {children}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    }),

})