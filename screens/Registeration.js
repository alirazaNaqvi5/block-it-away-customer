import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
export default function Registeration(props) {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [
      isRegistraionSuccess,
      setIsRegistraionSuccess
    ] = useState(false);
   
    const emailInputRef = createRef();
    const ageInputRef = createRef();
    const addressInputRef = createRef();
    const passwordInputRef = createRef();


    const handleSubmitButton = () => {
        setErrortext('');
        if (!userName) {
          alert('Please fill Name');
          return;
        }
        if (!userEmail) {
          alert('Please fill Email');
          return;
        }
        if (!userAge) {
          alert('Please fill Age');
          return;
        }
        if (!userAddress) {
          alert('Please fill Address');
          return;
        }
        if (!userPassword) {
          alert('Please fill Password');
          return;
        }
        //Show Loader
        setLoading(true);
        var dataToSend = {
          name: userName,
          email: userEmail,
          age: userAge,
          address: userAddress,
          password: userPassword,
        };
        var formBody = [];
        for (var key in dataToSend) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
     
        fetch('http://192.168.18.101:3000/api/users/register', {
          method: 'POST',
          body: formBody,
          headers: {
            //Header Defination
            'Content-Type':
            'application/x-www-form-urlencoded;charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            setLoading(false);
            console.log(responseJson);
            alert(responseJson);
            // If server response message same as Data Matched
            if (responseJson.status === 'success') {
              setIsRegistraionSuccess(true);
              console.log(
                'Registration Successful. Please Login to proceed'
              );
            } else {
              setErrortext(responseJson.msg);
            }
          })
          .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
            alert('Something went wrong');
          });
      };
      if (isRegistraionSuccess) {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: '#307ecc',
              justifyContent: 'center',
            }}>
            <Text style={styles.successTextStyle}>
              Registration Successful
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.buttonTextStyle}>Login Now</Text>
            </TouchableOpacity>
          </View>
        );
      }




  return (
    <View style={styles.mainBody}>
    
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View>
      <Image
        source={require("../assets/Logo.png")}
        style={{ width: "100%", height: "25%", resizeMode: "cover" }}
      />
        <KeyboardAvoidingView enabled>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(UserName) => setUserName(UserName)}
            underlineColorAndroid="#f000"
            placeholder="Enter Name"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="sentences"
            returnKeyType="next"
            onSubmitEditing={() =>
              emailInputRef.current && emailInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            underlineColorAndroid="#f000"
            placeholder="Enter Email"
            placeholderTextColor="#8b9cb5"
            keyboardType="email-address"
            ref={emailInputRef}
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current &&
              passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(UserPassword) =>
              setUserPassword(UserPassword)
            }
            underlineColorAndroid="#f000"
            placeholder="Enter Password"
            placeholderTextColor="#8b9cb5"
            ref={passwordInputRef}
            returnKeyType="next"
            secureTextEntry={true}
            onSubmitEditing={() =>
              ageInputRef.current &&
              ageInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(UserAge) => setUserAge(UserAge)}
            underlineColorAndroid="#f000"
            placeholder="Enter Age"
            placeholderTextColor="#8b9cb5"
            keyboardType="numeric"
            ref={ageInputRef}
            returnKeyType="next"
            onSubmitEditing={() =>
              addressInputRef.current &&
              addressInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(UserAddress) =>
              setUserAddress(UserAddress)
            }
            underlineColorAndroid="#f000"
            placeholder="Enter Address"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="sentences"
            ref={addressInputRef}
            returnKeyType="next"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
          />
        </View>
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}>
            {errortext}
          </Text>
        ) : null}
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={handleSubmitButton}>
          <Text style={styles.buttonTextStyle}>REGISTER</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
    </ScrollView>
  </View>
   
  )
}
const styles = StyleSheet.create({
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
     
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
      backgroundColor:'white'
    },
    buttonStyle: {
      backgroundColor: "#ebbf3b",
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 10,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
    },
    buttonTextStyle: {
      color: 'black',
      paddingVertical: 10,
      fontSize: 16,
      
    },
    inputStyle: {
      flex: 1,
      color: 'black',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#dadae8',
      backgroundColor:'#ebbf3b'
    },
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "white",
      alignContent: 'center',
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
    successTextStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      padding: 30,
    },
  });