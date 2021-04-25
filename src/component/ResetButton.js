import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default class ResetButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress } = this.props
        return (
            <View>
                <TouchableOpacity onPress={onPress} style={styles.button} ><Text style={{ fontSize: 40 }}> Reset </Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.15,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})