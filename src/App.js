import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import 'react-native-gesture-handler';

function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
