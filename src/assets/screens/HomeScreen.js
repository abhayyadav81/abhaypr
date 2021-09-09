import React from 'react';
import { Text, View,StyleSheet } from 'react-native'
import Button from './components/Button';

 
const HomeScreen=()=> {
  return(
    <View style={style.mainContainer}>
      <Text >HomeScreen</Text>
      <Button color = 'red'text='sahil' />
      <Button color = 'blue' text='dgfgh'/>

      <Button color = 'pink' text='abhay' alignItem='center' justifyContent= 'center'/>

      <Button color = 'green'text='noushad' height= {50}/>


    </View>
  )
}

export default HomeScreen;

const style=StyleSheet.create({
  mainContainer:{
    flex:1,
  }

})