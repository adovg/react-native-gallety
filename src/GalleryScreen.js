import React, {useState, Component, useEffect} from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
//import state from '../state';
import {addFotoActionCreator} from './redux/gallery-reducer';

function GalleryScreen(props) {
  let state = store.getState();
  //console.log(state.galleryScreen);
  let stateImgUrl = state.galleryScreen.photosUrl;
  //let someOtherUrl = 'https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=640';
  //imgUrl.push(someOtherUrl);
  //console.log(state.galleryScreen);

  fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0').then(function(response) {
  if(response.ok) {
    response.json().then(function(json) {
     let products = json;
      initialize(products);
    });
  } else {
    console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
  }
});

function initialize(products) {

  //let imgUrl = [];
    products.map( (searchRes) => {
      stateImgUrl.push(searchRes.urls.small);
    //store.setState(...imgUrl, searchRes.urls.small)                            
    //console.log(imgUrl);   
     })
//      state.setState({...imgUrl, })
  console.log(state);   
  };


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        
        <Text className='myText'>Some text </Text>
        {/* <Image source={{uri: imgUrl[3]}} style={{ width: 80, height: 80 }}/> */}
      </View>
    );
  };




  export default GalleryScreen;