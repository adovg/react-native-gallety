import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from './src/GalleryScreen';
import HomeScreen from './src/HomeScreen';
import store from "./src/redux/redux-store";
import {createStore} from 'react-redux';
import {Provider} from 'react-redux';




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



const Stack = createStackNavigator();

function App(props) {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
     
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
   
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>    
  );
}

export default App;