import React from 'react';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';

import Navigate from './navigate'


const fonts = () => Font.loadAsync({
  'mt-italic' : require('./assets/fonts/Montserrat-Italic.ttf'),
  'mt-light' : require('./assets/fonts/Montserrat-Light.ttf'),
});




export default function App() {
  const [font, setFont] = useState(false);


  if(font) {
    return (
    <Navigate/>
   
    )
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}/>
    )
  }

 
}


