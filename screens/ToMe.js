import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const ToMe = ({navigation}) => {
  return (
      <>
    {/* <View style={styles.conatiner}>
      <Text style={styles.heading}>To Me</Text>
    </View> */}
    <SafeAreaView style={styles.body}>
        <Text style={styles.heading}>This feature is only available to registered users</Text>

        <TouchableOpacity style={styles.signUpBtn } onPress={()=>navigation.navigate('Registration')}>
            <Text style={styles.buttonTextSignUp}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginUpBtn}  onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.buttonTextLogin}>Login</Text>
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

export default ToMe