
import React, {useState, createRef} from 'react';
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
import { ip } from '../ip';


export default function ForgetPassword({navigation}) {


    const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordc, setUserPasswordc] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
 
  const passwordInputRef = createRef();
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if (!userPasswordc) {
      alert('Please fill Confirm Password');
      return;
    }
    if (userPassword != userPasswordc) {
      alert('Password and Confirm Password not match');
      return;
    }
    setLoading(true);
    // let dataToSend = {email: userEmail, password: userPassword};
    
 
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch(`http://${ip}/api/users/forgotPassword?email=${userEmail}&password=${userPassword}`, requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result); alert(result); navigation.navigate('Blockit-A-Way')})
      .catch(error => console.log('error', error));
      
  };

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
              onChangeText={(UserEmail) =>
                setUserEmail(UserEmail)
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
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              placeholder="Enter Password" //12345
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              value={userPassword}
              ref={passwordInputRef}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={userPasswordc}
              onChangeText={(UserPasswordc) =>
                setUserPasswordc(UserPasswordc)
              }
              placeholder="Enter Conformed Password" //12345
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
            // onPress={handleSubmitPress}
            onPress={  handleSubmitPress}
            >
            <Text style={styles.buttonTextStyle}>Submit</Text>
          </TouchableOpacity>
          {/* <Text
            style={styles.  errorTextStyle}
            onPress={() => navigation.navigate('RegisterScreen')}>
           Forget Password
          </Text>
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate('Registration')}>
            New Here ? Register
          </Text> */}
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