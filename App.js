
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';

'react-native/Libraries/NewAppScreen';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);


const App = () => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackNavigation />
    </SafeAreaView>
  );
};



export default App;
