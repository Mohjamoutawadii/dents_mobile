import React, { useState, useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import { AsyncStorageEventProvider } from './AsyncStorageEventContext';


const App = () => {
 const stack = createNativeStackNavigator()
 return(
  <AsyncStorageEventProvider>
  <AuthNavigation />
  {/* Other components within your app */}
</AsyncStorageEventProvider>
 );
};


export default App;

