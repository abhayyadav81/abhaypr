import React from 'react';
import { Text, View, Button,StyleSheet } from 'react-native'
 
const Login=(props)=> {
  console.log("props",props.navigation.navigate)
const  abhaynext =()=>{
  props.navigation.navigate('Homed')
  }
  return(
    <View style={style.mainContainer}>
      <Text >Login</Text>
      <Button title="go to next"onPress={()=>abhaynext("hello")}/>
      <Button title="go to ImageScreen"onPress={ ()=> props.navigation.navigate('ImageScreen')}/>
      <Button title="go to CounterScreen"onPress={ ()=>props.navigation.navigate('CounterScreen')}/>
      <Button title="go to ColorScreen"onPress={ ()=>props.navigation.navigate('ColorScreen')}/>
      <Button title="go to SquareScreen"onPress={ ()=>props.navigation.navigate('SquareScreen')}/>
    </View>
  )
}

export default Login;

const style=StyleSheet.create({
  mainContainer:{
    flex:1,
  }

})