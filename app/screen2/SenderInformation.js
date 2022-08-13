import React from 'react';
import {
    Button,
    TextInput,
    Text,
    StyleSheet,
    Pressable,
    SafeAreaView,
} from 'react-native';

function SenderInformation() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}> Sender Information </Text>
            <SafeAreaView> 
            <TextInput 
                    placeholder={"Company or Name"}
                    style={styles.input}
                />
            
                <TextInput 
                    placeholder={"Email"}
                    style={styles.input}
                />
                
                <TextInput 
                    placeholder={"Phone"}
                    style={styles.input}
                />
                    
                <TextInput 
                    placeholder={"Address"}
                    style={styles.input}
                />
                    
                <TextInput 
                    placeholder={"Country"}
                    style={styles.input}
                /> 
            </SafeAreaView>


<Pressable style={styles.buttonStyle} > 
                <Text style={styles.buttonTextStyle}>
                    Next
                </Text>
            </Pressable>



        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1c1e1f",
      alignItems: 'center',
      justifyContent: 'center',
    },

    heading: {
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginVertical: '8%',
    },

    input: {
        marginVertical: '2%',
        marginHorizontal: '8%',
        padding: '3%',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
    },

    buttonStyle: {
        backgroundColor: "white",
        width: '50%',
        height: '9%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%',
        elevation: 7,
        borderRadius: 5,
        marginTop: '25%',
    },

    buttonTextStyle: {
        color: '#1c1e1f',
        fontSize: 15,
        fontWeight: 'bold',
    },

});

export default SenderInformation;