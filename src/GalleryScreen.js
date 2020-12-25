import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';

function GalleryScreen() {
  let state = store.getState();
  let stateImgUrl = state.galleryScreen.photosUrl;

  fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0').then(function (response) {
    if (response.ok) {
      response.json().then(function (json) {
        let products = json;
        mapImageUrl(products);
      });
    } else {
      alert('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
    }
  });

  function mapImageUrl(products) {

    products.map((searchRes) => {
      stateImgUrl.push(searchRes.urls.small);
    })
  };

  const RenderImage = () => {
    return (
      stateImgUrl.map((i) => <Image source={{ uri: i }} style={styles.imageItem} key={Math.random()} resizeMode="contain" />)
    )
  }

  return (
    <SafeAreaView style={styles.containerFoto}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageWrap}>
          <RenderImage style={styles.imageItem} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default GalleryScreen;


const styles = StyleSheet.create({
  imageWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageItem: {
    flex: 1,
    width: '100%',
    height: 600,
    marginBottom: 10
  },
});