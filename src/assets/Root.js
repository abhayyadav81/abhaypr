import React from 'react';
import { Text, View, Button,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './ImageScreen';
import CounterScreen from './screens/CounterScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';
const Drawer=  createDrawerNavigator();
const Root=()=> {

  return(
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Loging" component={Login} />
      <Drawer.Screen name="Homed" component={HomeScreen} />
      
      <Drawer.Screen name="CounterScreen" component={CounterScreen} />
     
      <Drawer.Screen name="ColorScreen" component={ColorScreen} />
      <Drawer.Screen name="SquareScreen" component={SquareScreen} />
      
    </Drawer.Navigator>

  </NavigationContainer>
  )
}

export default Root;

const style=StyleSheet.create({
  mainContainer:{
    flex:1,
  }

})