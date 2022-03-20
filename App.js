
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



const App = () => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackNavigation />
    </SafeAreaView>
  );
};



export default App;
