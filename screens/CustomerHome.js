import React, { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../navigation/StackNavigator";
import { ip } from "../ip";

const CustomerHome = ({ navigation }) => {

  const { signOut, user } = React.useContext(AuthContext);

  // create modal states for buttons Track parcel, Feedback/Complain, Shipment List
  const [trackP, setTrackP] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [shipment, setShipment] = useState(false);

  // create state for setTrackingNumber
  const [trackingNumber, setTrackingNumber] = useState("");


  // create state for tractParcel data
  const [trackData, setTrackData] = useState([]);

  // create state for shipmentList data
  const [shipmentData, setShipmentData] = useState([]);


  React.useEffect(() => {
    console.log(user);
    // async()=>{
      fetch(`http://${ip}/api/users/trackParcels?phone=${user}`, {
        method: "GET",
      })
      .then((response) => response.json())
      .then((result) => {console.log("result of parcel======>",result); setTrackData(result)})
      .catch((error) => {console.log("error", error); alert("error", error);});
    // }

    fetch(`http://${ip}/api/users/getParcels?phone=${user}`, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((result) => {console.log("result of parcel======>",result); setShipmentData(result)})
    .catch((error) => {console.log("error", error); alert("error", error);});

  }, [trackP, shipment]);




  return (
    <View style={styles.backgroundStyle}>
      {/* HERO SECTION WITH YELLOW BACKGROUND */}
      <View style={styles.heroSection}>
        <Image
          source={require("../assets/icon1.png")}
          style={styles.iconStyle}
        />
      </View>

      {/* <Image
      source={require("../assets/Logo.png")}
      style={{ width: "100%", height: "25%", resizeMode: "cover" }}
    /> */}

      <View style={styles.loginSection}>
        <View>
          <Text style={styles.heading}>Welcome</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.subHeading}> {user ? user : null}</Text>
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

      {/* create more buttons for Track Parcel, feedback/complain, shipment list */}

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setTrackP(true)}
      >
        <Text style={styles.buttonTextStyle}>Track Parcel</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setShipment(true)}
      >
        <Text style={styles.buttonTextStyle}>Shipment List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonStyle, { position: "absolute", bottom: 10 }]}
        onPress={() => signOut()}
      >
        <Text style={styles.buttonTextStyle}>Logout</Text>
      </TouchableOpacity>

      {/* create modal for Track Parcel */}
      <Modal
        animationType="slide"
        transparent={true}
        style={{ flex: 1 }}
        visible={trackP}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setTrackP(!trackP);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Track Parcel</Text>

            <TouchableOpacity
              style={[styles.buttonStyle, styles.buttonClose]}
              onPress={() => setTrackP(!trackP)}
            >
              <Text style={styles.buttonTextStyle}>close</Text>
            </TouchableOpacity>

            {/* create cards to show parcels data */}
            <ScrollView style={{
              width: "100%",
              height: "100%",
            }}>
              {trackData.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      backgroundColor: "#fff",
                      width: "95%",
                      alignSelf: "center",
                      height: 200,
                      borderRadius: 10,
                      padding: 10,
                      marginVertical: 10,
                      borderRadius: 10,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,

                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                       sender : {item.name}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Receiver : {item.receiver}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Receiver Address : {item.receiver_address}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                     Destination : {item.receiver_city}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Receiver contact : {item.receiver_phone}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                     Current Status : {item.status}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>




           
          </View>
        </View>
      </Modal>

     

      {/* create modal for shipment list */}
      <Modal
        animationType="slide"
        transparent={true}
        style={{ flex: 1 }}
        visible={shipment}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShipment(!shipment);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Shipment List</Text>
            <TouchableOpacity
              style={[styles.buttonStyle, styles.buttonClose]}
              onPress={() => setShipment(!shipment)}
            >
              <Text style={styles.buttonTextStyle}>Cancel</Text>
            </TouchableOpacity>

            {/* create cards for parcels shipment list */}
        <ScrollView>
          {shipmentData.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor: "#fff",
                  width: "95%",
                  alignSelf: "center",
                  height: 200,
                  borderRadius: 10,
                  padding: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,

                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                   sender : {item.name}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Receiver : {item.receiver}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Receiver Address : {item.receiver_address}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                 Destination : {item.receiver_city}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Receiver contact : {item.receiver_phone}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                 Current Status : {item.status}
                </Text>
              </View>
            );
          }
          )}


            </ScrollView>


          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: "95%",
    // height: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    color: "black",
    backgroundColor: "#ebbf3b",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    width: 300,
  },

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
    width: "100%",
    height: "100%",
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
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomerHome;
