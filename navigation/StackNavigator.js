import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import { NavigationContainer } from "@react-navigation/native";
import GetAQoute from "../screens/GetAQuote";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CallForBooking from "../screens/CallForBooking";
import Login from "../screens/Login";
import Registration from "../screens/Registeration";
import ForgetPassword from "../screens/ForgetPassword";
import ForMe from "../screens/FormMe";
import ToMe from "../screens/ToMe";
import CustomerHome from "../screens/CustomerHome";
const Stack = createStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';
// const auth = false



const NavigationDrawerStructure = (props) => {

  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  // React.useEffect(() => {
  //   // auth();
  //   console.log(auth);
  //   alert(auth);
  // });

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = ({ navigation }) => {
  const [auth, setAuth] = React.useState(false);
  React.useEffect(() => {
    // auth();
    async () => {
      const user = await AsyncStorage.getItem('user');
      alert(user);
      if(user){
        setAuth(true);
      }else{
        setAuth(false);
      }
    }
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {
        auth ? (
          
        
        <Stack.Screen
        name="Blockit-A-Way"
        component={ CustomerHome }
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />)
      :
      (
        <Stack.Screen
        name="Blockit-A-Way"
        component={ Home }
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      )
      
    
    }

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        name="Get A Qoute"
        component={GetAQoute}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        name="Call For Booking"
        component={CallForBooking}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        name="Login"
        component={Login}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        name="Registration"
        component={Registration}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        name="ForgetPassword"
        component={ForgetPassword}
      />

      <Stack.Screen 
        options={{
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      name="CustomerHome" component={CustomerHome} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="For Me "
        component={ForMe}
        options={{
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen name="To Me " component={ToMe} />
    </Stack.Navigator>
  );
};

const ToMeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="To Me "
        component={ToMe}
        options={{
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator, ToMeStackNavigator };
