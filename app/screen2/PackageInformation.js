import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

function PackageInformation(props) {
    return (
        <View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1c1e1f",
    },

    heading: {
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input: {
        marginVertical: '2%',
        marginHorizontal: '8%',
        padding: '3%',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
    },

    button: {
        backgroundColor: 'white',

    }
});

export default PackageInformation;