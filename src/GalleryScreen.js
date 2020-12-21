import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
//import state from '../state';


function GalleryScreen(props) {
  let state = store.getState();
  //console.log(state);
//let url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

const [totalReactPackages, setTotalReactPackages] = useState(null);

useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => setTotalReactPackages(data.total));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{totalReactPackages}</Text>
        
        <Text className='myText'>Some text  </Text>
 
        {/* <Image
        source={{ uri: {state.img.map(uri = () => uri)} }}
        style={{ width: 40, height: 40 }}
        /> */}
        {/* <Image source={require(state.img)} /> */}
        {/* <Image source={require({imgUrl})} /> */}
      </View>
    );
  };

  export default GalleryScreen;