import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigations:
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack  = createStackNavigator();

//Paginas:
import Contatos from './pages/contatos';
import Camera from './pages/camera';


const Autenticado = () => {
  return(
    <Drawer.Navigator initialRouteName="Contatos">
        <Drawer.Screen name="Contatos" component={Contatos} />
        <Drawer.Screen name="Camera" component={Camera} />
    </Drawer.Navigator>
  )

}

export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Autenticado">
      <Stack.Screen name="Contatos" component={Contatos} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
