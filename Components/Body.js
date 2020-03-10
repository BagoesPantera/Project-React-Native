import React, { Component } from 'react';
import {View, Text, Button, TouchableHighlight} from 'react-native';

export default class Body extends Component{

  Baten(){
    alert('tes');
  }
render(){
    return <View style={{
      justifyContent : 'center',
      height : 500,
      marginLeft : 9
    }}>
    <Text style={{
      fontSize : 30,
      color : '#ffffff',
      fontWeight : 'bold'
    }}>Create your best experience in Bali</Text>
    
    <TouchableHighlight 
                style ={{
                    height: 40,
                    width:110,
                    borderRadius:10,
                    backgroundColor : "#3B0001",
                    marginLeft :3,
                    marginRight:50,
                    marginTop :10
                }}>

                  <Button 
    onPress={this.Baten} 
    title="Book Now"
  color='#2E0001'
    />
                </TouchableHighlight>
  </View>
}
}