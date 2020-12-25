import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


function HomeScreen({ navigation }, props) {
  let state = store.getState();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{state.homeScreen.userName}</Text>
      <Pressable onPress={() => { navigation.navigate('Gallery', { name: 'userName' }) }}>
        <Image style={styles.logo} source={require('../assets/user_logo.png')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});


export default HomeScreen;