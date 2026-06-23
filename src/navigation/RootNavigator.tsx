import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import Home from '../screens/Home';
import About from '../screens/About';
import Settings from '../screens/Setting';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/> 
            <Tab.Screen name='About' component={About}/> 
            <Tab.Screen name='Settings' component={Settings}/> 
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
