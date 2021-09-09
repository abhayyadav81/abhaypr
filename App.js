// import { createStackNavigator, createAppContainer} from 'react-navigation';
// import ComponentsScreen from './src/assets/Abhay';


// const navigator = createStackNavigator(

//   {
//     Components: ComponentsScreen

//   },
//   {
//     initialRouteName: 'Components',
//     defaultNavigationOption: {
//       title:'App'
//     }
//   }
// );

// export default createAppContainer(navigator)


import React from 'react';
import { Text, View, Button,StyleSheet } from 'react-native'
import Root from './src/assets/Root';
import ImageScreen from './src/assets/ImageScreen';
import CounterScreen from './src/assets/screens/CounterScreen';
import ColorScreen from './src/assets/screens/ColorScreen'; 

const App=()=> {
  return(
    <View style={style.mainContainer}>
      <Root/>
    </View>
  )
}

export default App;

const style=StyleSheet.create({
  mainContainer:{
    flex:1,
  }

})