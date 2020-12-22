import React, {useState, Component, useEffect} from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
//import state from '../state';
import {addFotoActionCreator} from './redux/gallery-reducer';

function GalleryScreen(props) {
  let state = store.getState();
  //console.log(state.galleryScreen);
  let imgUrl = state.galleryScreen.photosUrl;
  let someOtherUrl = 'https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=640';
  imgUrl.push(someOtherUrl);
  console.log(state.galleryScreen);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        
        <Text className='myText'>Some text </Text>
        <Image source={{uri: imgUrl[3]}} style={{ width: 80, height: 80 }}/>
      </View>
    );
  };

//   let mapStateToProps = (state) => {
//     console.log('!');
//     console.log(state);
//     return {
//        dialogPage: state.dialogPage,
//        newMessagesBody: state.dialogPage.newMessagesBody
//     }
// }; //// это диспатчер ?

//const GalleryScreen = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


//export default DialogsContainer;


  export default GalleryScreen;