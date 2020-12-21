import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
//import state from '../state';


function GalleryScreen(props) {
  let state = store.getState();
  //console.log(state.galleryScreen);
  let imgUrl = state.galleryScreen.photosUrl;
 // console.log(imgUrl[0]);
  let myFoto = imgUrl[0];
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        
        <Text className='myText'>Some text </Text>
        <Image source={{uri: imgUrl[0]}} style={{ width: 80, height: 80 }}/>
      </View>
    );
  };

  export default GalleryScreen;