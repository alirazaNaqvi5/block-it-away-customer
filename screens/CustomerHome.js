import React ,{useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Button, Text, StyleSheet,Image ,TextInput,TouchableOpacity,Modal} from "react-native";


const CustomerHome = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState('');


  useEffect(() => {
    async ()=>{
      const usern = await AsyncStorage.getItem('user');
      setUser(usern);
      alert(usern);
    }
    
  }, []);

  return (
    <View style={styles.backgroundStyle}>
    {/* HERO SECTION WITH YELLOW BACKGROUND */}
    <View style={styles.heroSection}>
      <Image
        source={require("../assets/icon1.png")}
        style={styles.iconStyle}
      />

    </View>

    <Image
      source={require("../assets/Logo.png")}
      style={{ width: "100%", height: "25%", resizeMode: "cover" }}
    />


<View style={styles.loginSection}>
        <View>
          <Text style={styles.heading}>Welcome</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.subHeading}> {user? user : null}</Text>
          {/* <Button title="Login" onPress={()=>navigation.navigate('Login')}/>
          <Text>|</Text>
          <Button title="Sign up" onPress={()=> navigation.navigate('Registration')}/> */}
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Get A Qoute")}
      >
        <Text style={styles.buttonTextStyle}>Get a Quote</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Call For Booking")}
      >
        <Text style={styles.buttonTextStyle}>Call for Booking</Text>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Tracking details will appear here</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>

           
            </View>
          </View>
        </Modal>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
  },
  heroSection: {
    marginTop: 0,
    height: "25.3%",
    width: "100%",
    justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: "#ebbf3b",
  },

  iconStyle: {
    height: "40%",
    width: "40%",
    alignSelf: "center",
  },
  heroHeading: {
    fontSize: 20,
    fontWeight: "500",
    marginHorizontal: "5%",
  },
  textInput: {
    // height: '15%',
    width: "65%",
    borderColor: "#ebbf3b",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: "2%",
    marginHorizontal: "5%",
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    // placeholder: 'black',
    textAlign: "center",
  },
  Track: {
    backgroundColor: "#000",
    width: "20%",
    paddingVertical: "3%",
    borderRadius: 10,
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "900",
  },

  loginSection: {
    height: "10%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: '5%',
  },

  buttonStyle: {
    backgroundColor: "#ebbf3b",
    width: "90%",
    height: "5%",
    justifyContent: "center",
    // alignItems: 'center',
    marginVertical: "1%",
    // elevation: 7,
    borderRadius: 5,
    paddingHorizontal: "5%",
  },

  buttonTextStyle: {
    color: "#1c1e1f",
    fontSize: 15,
    fontWeight: "bold",
  },

  // modal styles
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#000",
    // width: '15%',
    // paddingVertical: "10%",

    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});


export default CustomerHome;
