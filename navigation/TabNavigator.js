import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PushNotification from '../screens/PushNotification';
import { MainStackNavigator, ContactStackNavigator } from './StackNavigator'
import Setting from '../screens/Setting'
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={
      {
        headerShown: false
      }
    } >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Notification" component={PushNotification} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator