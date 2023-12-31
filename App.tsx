// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './src/routes/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </SafeAreaProvider>

  );
}

export default App;