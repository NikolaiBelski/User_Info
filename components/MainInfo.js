import React from 'react';
import { Text, View,Button,FlatList,TouchableOpacity,StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';
import { useEffect,useState } from 'react';

export default function MainInfo ({navigation}) {

  const url = 'https://jsonplaceholder.typicode.com/users?_limit=5'



   const [info,setInfo] = useState([]);
      useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(respons=>setInfo(respons))
        .catch(error=>alert(error))
      },[])
   


    return (
      <View style = {gStyle.main}>
        <Text style = {styles.header} >Список пользователей :</Text>
        <FlatList data={info} renderItem={({item})=>(
          
          <TouchableOpacity onPress={()=>navigation.navigate('FullInfo',item)}> 
          
             <Text style = {styles.title}>{item.id}) {item.name}</Text>

          </TouchableOpacity> 
        )}/>

        
      
      </View>
    )
}
 
const styles = StyleSheet.create({
  header:{
    marginBottom:30,
    fontSize:22,
    
    
  },
  title:{
    fontFamily:'mt-italic',
    fontSize:25,
    textAlign:'center',
    marginTop:20,
    color:'#474747'
  }
  
})
