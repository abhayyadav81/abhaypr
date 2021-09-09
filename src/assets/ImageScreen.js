import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'
const ImageScreen =() => {
    return <View>
         <ImageDetnpail title="forest" imageSource={require ('../../assets/forest.jpg')}/>
         <Text>imageScore=10</Text>
         <ImageDetail title="beach" imageSource={require ('../../assets/beach.jpg')}/>
         <Text>imageScore=9</Text>
         <ImageDetail title = "mountain" imageSource={require ('../../assets/mountain.jpg')}/>
         <Text>imageScore=8</Text>
         
    </View>
};
const style = StyleSheet.create({});

export default ImageScreen;
