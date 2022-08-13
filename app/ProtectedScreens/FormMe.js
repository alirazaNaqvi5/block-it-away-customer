import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const FromMe = () => {
  return (
      <>
    <View style={styles.conatiner}>
      <Text style={styles.heading}>From Me</Text>
    </View>
    <SafeAreaView style={styles.body}>
        <Text style={styles.heading}>If you would like to ship with</Text>
        <Text style={styles.heading}>Blockit-A-Way</Text>

        <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.buttonTextSignUp}>GET QUOTATION NOW</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginUpBtn}>
            <Text style={styles.buttonTextLogin}>CALL FOR BOOKING</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    conatiner: {
        paddingVertical: '5%',
        alignItems: 'center',
        backgroundColor: '#ebbf3b',
    },
    heading: {
        fontSize: 20,
        fontWeight: '900',
        marginTop: '5%',
        textAlign: 'center',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpBtn: {
        backgroundColor: 'red',
        width: '90%',
        paddingVertical: '3%',
        borderRadius: 10,
        marginVertical: '5%',
    },
    loginUpBtn: {
        backgroundColor: 'white',
        width: '90%',
        paddingVertical: '3%',
        borderRadius: 10,
        marginVertical: '5%',
    },
    buttonTextSignUp: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: '900',
    },
    buttonTextLogin: {
        textAlign: 'center',
        fontSize: 15,
        color: 'red',
        fontWeight: '900',
    }
})

export default FromMe