import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class Subhead extends Component{
render(){
    return <View style={{
        backgroundColor : '#ffffff'
        
    }}>
      <Text>───────────────────────────</Text>
    <Text style={{fontSize : 20}}>Home</Text>
    <Text>───────────────────────────</Text>
    <Text style={{fontSize : 20}}>About</Text>
    <Text>───────────────────────────</Text>
    <Text style={{fontSize : 20}}>Contact</Text>
    <Text></Text>

  </View>
}
}