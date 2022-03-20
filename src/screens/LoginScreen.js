import { View, Text, TextInput } from 'react-native'
import React,{useState, useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
  import {MY_EMAIL} from "@env"
  import { GoogleSignin } from '@react-native-google-signin/google-signin';
  // import { createUserWithEmailAndPassword } from 'firebase/auth';


const LoginScreen =({navigation})=> {
  const [loggedIn, setloggedIn] = useState(false);
const [userInfo, setuserInfo] = useState([]);

console.log(MY_EMAIL)

useEffect(() => {
  GoogleSignin.configure({
    scopes: [MY_EMAIL], // what API you want to access on behalf of the user, default is email and profile
    webClientId:'', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });
}, []);

const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setloggedIn(false);
    setuserInfo([]);
  } catch (error) {
    console.error(error);
  }
};

const _signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const {accessToken, idToken} = await GoogleSignin.signIn();
    setloggedIn(true);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      alert('Cancel');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert('Signin in progress');
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert('PLAY_SERVICES_NOT_AVAILABLE');
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
  return (
    <View style={{flex:1, justifyContent: 'center',alignItems: 'center',}}>
      <Text>Please Log in</Text>
      <TextInput
            style={{ flex: 1, color:'#000000' }}
            placeholderTextColor="#696969"
            placeholder="EnterEmail"
          />
    </View>
  )
}

export default LoginScreen;