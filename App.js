// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Platform, Dimensions, Button, TextInput  } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './app/screens/Home';
// import SentPackages from './app/screens/SentPackages';
// import ReceivedPackages from './app/screens/ReceivedPackages';

// import TabBar from './app/TabBar';
// import GetAQuote from './app/screens/GetAQuote';
// import SenderInformation from './app/screens/SenderInformation';
// import RecepientInformation from './app/screens/RecipientInformation';
// import PackageInformation from './app/screens/PackageInformation'; 
// import MyStack from './app/StackNavigation';
// import ToMe from './app/ProtectedScreens/ToMe';
// import FormMe from './app/ProtectedScreens/FormMe';
// import ServicePoint from './app/screens/ServicePoint';

// const Tab = createBottomTabNavigator();

// export default function App() {
 
//   return (
//     <NavigationContainer>
// 		<Tab.Navigator 
//        tabBar={props => <TabBar {...props} />}
//        screenOptions={{
//          headerShown: false
//       }}>
// 			<Tab.Screen  name="Home" component={MyStack} />
//       <Tab.Screen screenOptions={{
//          headerShown: true
//       }} name="To me" component={ToMe} />
//       <Tab.Screen name="From me" component={FormMe} />
//       <Tab.Screen name="Service Point" component={ServicePoint} />
// 			{/* <Tab.Screen name="Sent Packages" component={SentPackages} />
// 			<Tab.Screen name="Received Packages" component={ReceivedPackages} />
//       <Tab.Screen name="get a quote" component={GetAQuote} />
//       <Tab.Screen name="sender info" component={SenderInformation} />
//       <Tab.Screen name="recepient info" component={RecepientInformation} />
//       <Tab.Screen name="package info" component={PackageInformation} /> */}
    
//     </Tab.Navigator >
//     </NavigationContainer>
    
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//    // flex: 1,
//     //backgroundColor: '#fff',
//     //alignItems: 'center',
//    // justifyContent: 'center',
//     //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight :0,
//   },
// }); 
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";
import TabNavigator from "./navigation/TabNavigator";



const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
