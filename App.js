import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

import Header from './Components/Header.js';
import Subhead from './Components/Subhead.js';
import Body from './Components/Body.js';

export default class App extends Component{
  render(){
    return( 
      <ImageBackground source={require('./image/bekgron.jpg')}style={{flex : 1 }} >
        <Header/>
        <Text></Text>
        <Body/>
      </ImageBackground>
      );
  }
}

// const styles = StyleSheet.create({
//   bgimage:{
// width : 100,
// height : 100
//   }
// }); 