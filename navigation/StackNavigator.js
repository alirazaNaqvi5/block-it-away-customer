// import React from "react";
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
  Alert,
} from "react-native";
import { ip } from "../ip";
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
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const auth = false

import * as React from "react";
import * as SecureStore from "expo-secure-store";

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

const AuthContext = React.createContext();
export { AuthContext };

const MainStackNavigator = ({ navigation }) => {
  // ======================================================
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            user : action.user.phone
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            user : null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async ({email, password}) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
       if({email,password}){ var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        console.log(email);
        console.log(password);
        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var requestOptions = {
          method: "POST",
         
        };

        fetch(`http://${ip}/api/users/logins/?email=${email}&password=${password}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {console.log("result======>",result.user, result.token); 
        if(result.user){
          dispatch({ type: "SIGN_IN", token: result.token, user : result.user });
        }
        else{
          alert("Invalid User")
        }
        })
          .catch((error) => {console.log("error", error); alert("error", error);});
}
else{
  alert("Please fill the email and password");
}
        
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      user: state.user,
    }),
    []
  );

  // ======================================================

  // const [auth, setAuth] = React.useState(false);

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        {state.userToken == null ? (
          <>
            <Stack.Screen
              name="Blockit-A-Way"
              component={Home}
              options={{
                // headerLeft: () => (
                //   <NavigationDrawerStructure navigationProps={navigation} />
                // ),
                headerStyle: {
                  backgroundColor: "#ebbf3b", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                  fontWeight: "bold", //Set Header text style
                },
              }}
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
              name="CustomerHome"
              component={CustomerHome}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Blockit-A-Way"
              component={CustomerHome}
              options={{
                // headerLeft: () => (
                //   <NavigationDrawerStructure navigationProps={navigation} />
                // ),
                headerStyle: {
                  backgroundColor: "#ebbf3b", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                  fontWeight: "bold", //Set Header text style
                },
              }}
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

            {/* <Stack.Screen
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
      /> */}

            {/* <Stack.Screen
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
      /> */}
            {/* <Stack.Screen
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
      /> */}

            {/* <Stack.Screen 
        options={{
          headerStyle: {
            backgroundColor: "#ebbf3b", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      name="CustomerHome" component={CustomerHome} /> */}
          </>
        )}

        {/* <Stack.Screen
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
      name="CustomerHome" component={CustomerHome} /> */}
      </Stack.Navigator>
    </AuthContext.Provider>
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
