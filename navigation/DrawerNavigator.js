import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import ForMe from '../screens/FormMe'
import ToMe from '../screens/ToMe'
import {MainStackNavigator,  ContactStackNavigator,  ToMeStackNavigator } from "./StackNavigator";
import SentPackages from '../screens/SentPackages';
import ReceivedPackages from '../screens/ReceivedPackages';

import GetAQuote from '../screens/GetAQuote';
import SenderInformation from '../screens/SenderInformation';
import RecepientInformation from '../screens/RecipientInformation';
import PackageInformation from '../screens/PackageInformation'; 
import  TabNavigator  from "../navigation/TabNavigator";

import ServicePoint from '../screens/ServicePoint';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Button } from 'react-native';

const Drawer = createDrawerNavigator();

// let auth = async () => {
//   const user = await AsyncStorage.getItem('user');
//   if(user){
//     return true;
//   }else{
//     return false;
//   }
// }





const DrawerNavigator = () => {

  const [auth, setAuth] = React.useState(false);
  React.useEffect(() => {
    // auth();
    async () => {
      const user = await AsyncStorage.getItem('user');
      alert(user);
      if(user){
        setAuth(true);
      }
    }
  });
  function Logout({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Logout"
          onPress={() =>   AsyncStorage.removeItem('user').then(() => navigation.navigate('Home'), setAuth(false))}      
        />
      </View>
  
      // navigation.navigate('Login')
    );
  }

  return (
    <Drawer.Navigator screenOptions={
      {
        headerShown: false
      }
    } >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen  name="For Me " component={ContactStackNavigator }/>
      <Drawer.Screen name="To Me " component={ToMeStackNavigator}/>
      <Drawer.Screen name="Service Point" component={ServicePoint} />
			<Drawer.Screen name="Sent Packages" component={SentPackages} />
			<Drawer.Screen name="Received Packages" component={ReceivedPackages} />
      <Drawer.Screen name="get a quote" component={GetAQuote} />
      <Drawer.Screen name="sender info" component={SenderInformation} />
      <Drawer.Screen name="recepient info" component={RecepientInformation} />
      <Drawer.Screen name="package info" component={PackageInformation} />
      {
        auth ? <Drawer.Screen name="Logout" component={Logout} /> : null
      }
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
