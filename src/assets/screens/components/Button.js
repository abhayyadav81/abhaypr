import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = ({onIncreases}) => {
   
    return (
        <TouchableOpacity onPress={onIncreases} style={{height:50,width:'100%',backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#fff'}}>dds</Text>
        </TouchableOpacity>
    )
}

export default Button
