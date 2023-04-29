import * as React from 'react'

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import style from './styles'
import Counter from './Components/Counter'
import Home from './Components/Home'
import Contacts from './Components/Contacts'


const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{title: 'Eric Spychalski'}}
        />
         <Stack.Screen
          name='Contacts'
          component={Contacts}
          options={{title: 'Contacts'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
 
}

export default App

