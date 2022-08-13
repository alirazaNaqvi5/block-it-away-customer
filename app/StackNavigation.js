import { createStackNavigator } from '@react-navigation/stack';
import CallForBooking from './screens/CallForBooking';
import GetAQuote from './screens/GetAQuote';
// import Home from './screens/Home';
import Home from './screen2/Home';
import PackageInformation from './screens/PackageInformation';
import ReceivedPackages from './screens/ReceivedPackages';
import SenderInformation from './screens/SenderInformation';
import SentPackages from './screens/SentPackages';
// import RecepientInformation from './screens/RecepientInformation';

import Registeration from './screen2/Registeration';
import Login from './screen2/Login';





const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
     }}>
      <Stack.Screen name="Home" component={Home} />
	  <Stack.Screen name="Sent Packages" component={SentPackages} />
	  <Stack.Screen name="Received Packages" component={ReceivedPackages} />
      <Stack.Screen name="get a quote" component={GetAQuote} />
      <Stack.Screen name="sender info" component={SenderInformation} />
      <Stack.Screen name="Call for booking" component={CallForBooking} />
      <Stack.Screen name="package info" component={PackageInformation} />
      <Stack.Screen name="Registeration" component={Registeration} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default MyStack;