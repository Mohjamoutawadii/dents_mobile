import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import PwActivity from './PwActivity';
import DentChoose from './DentChoose';
import Login from './Login';
import Profile from './Profile';
import TPS from './TPS';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
 
const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='PwActivity' screenOptions={{headerShown:true}}>
      <Stack.Screen name='Les Tps'>
        {() => (
          <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Dents/Préparation" component={DentChoose} />
            <Tab.Screen 
              options={{
                tabBarVisible: false, 
              }}
              name="Home" component={Home} />
            <Tab.Screen 
              options={{
                tabBarVisible: false,
              }}
              name="Profile" component={Profile} />
              <Tab.Screen 
              options={{
                tabBarVisible: false,
              }}
              name="Tp" component={TPS} />
          </Tab.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name='PwActivity' component={PwActivity}/>
    </Stack.Navigator>
  </NavigationContainer>
);

const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export {SignedInStack, SignedOutStack};
