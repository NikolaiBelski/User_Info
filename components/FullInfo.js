import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';


export default function FullInfo ({route}) {
 
    return (
      <View style = {gStyle.main}>

        <Text style = {styles.name}>{route.params.name}</Text>
        <Text style = {gStyle.title}>username: {route.params.username}</Text>
        <Text style = {gStyle.title}>email: {route.params.email}</Text>
        <Text style = {gStyle.title}>phone: {route.params.phone}</Text>
        <Text style = {gStyle.title}>website: {route.params.website}</Text>
      </View>
    )
}

 
const styles = StyleSheet.create({
  name:{
    marginBottom:30,
    fontSize:22,
    fontFamily:'mt-italic',
    textAlign:'center',
    
    
  },
  title:{
    fontFamily:'mt-italic',
    fontSize:25,
    textAlign:'center',
    marginTop:20,
    color:'#474747'
  }
  
})
