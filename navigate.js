import React from "react";
import MainInfo from './components/MainInfo'
import FullInfo from './components/FullInfo'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

 const Navigate = () => {

    return (
   <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="MainInfo"
            component={MainInfo}
            options={
              {title:'Главная Страница',
              headerStyle:{backgroundColor:'green',height:100},
              headerTitleStyle:{fontWeight:'light'}


            }
              }/>
          <Stack.Screen
            name="FullInfo"
            component={FullInfo}
            options={{title:'Информация'}}/>
        </Stack.Navigator>    
   </NavigationContainer>


    )
}


export default Navigate