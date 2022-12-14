
import React, {useState, createRef, useContext} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {AuthContext} from '../navigation/StackNavigator';
import { ip } from '../ip';


export default function Login({navigation}) {

  const { signIn } = React.useContext(AuthContext);



    const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const passwordInputRef = createRef();
  const handleSubmitPress = () => {
    signIn({email, password});
  };
  // const handleSubmitPress = () => {
  //   setErrortext('');
  //   if (!userEmail) {
  //     alert('Please fill Email');
  //     return;
  //   }
  //   if (!userPassword) {
  //     alert('Please fill Password');
  //     return;
  //   }
  //   setLoading(true);
  //   let dataToSend = {email: userEmail, password: userPassword};
  //   let formBody = [];
  //   for (let key in dataToSend) {
  //     let encodedKey = encodeURIComponent(key);
  //     let encodedValue = encodeURIComponent(dataToSend[key]);
  //     formBody.push(encodedKey + '=' + encodedValue);
  //   }
  //   formBody = formBody.join('&');
 
  //   fetch('http://192.168.18.101:3000/api/users/logins', {
  //     method: 'POST',
  //     body: formBody,
  //     headers: {
  //       //Header Defination
  //       'Content-Type':
  //       'application/x-www-form-urlencoded;charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then(async(responseJson) => {
  //       //Hide Loader
  //       setLoading(false);
  //       console.log(responseJson);
  //       // If server response message same as Data Matched
  //       if (responseJson.status === 'success') {
  //        await AsyncStorage.setItem('user_id', responseJson.data.user.email);
  //        await AsyncStorage.setItem('user', responseJson.data.user.name);
  //         console.log(responseJson.data.email);
  //         navigation.replace('CustomerHome');
  //       } else {
  //         setErrortext(responseJson.msg);
  //         console.log('Please check your email id or password');
  //       }
  //     })
  //     .catch((error) => {
  //       //Hide Loader
  //       setLoading(false);
  //       console.error(error);
  //     });
  // };

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
          <View style={{alignItems: 'center',marginTop:50}}>
           
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={email}
              onChangeText={(email) =>
                setEmail(email)
              }
              placeholder="Enter Email" //dummy@abc.com
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={password}
              onChangeText={(password) =>
                setPassword(password)
              }
              placeholder="Enter Password" //12345
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              ref={passwordInputRef}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
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
            onPress={handleSubmitPress}
            // onPress={  navigation.navigate('CustomerHome')}
            >
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>
          <Text
            style={styles.  errorTextStyle}
            onPress={() => navigation.navigate('ForgetPassword')}>
           Forget Password
          </Text>
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate('Registration')}>
            New Here ? Register
          </Text>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  </View>
  )
}
const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "white",
      alignContent: 'center',
    },
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
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
    registerTextStyle: {
      color: '#ebbf3b',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      alignSelf: 'center',
      padding: 10,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
  });