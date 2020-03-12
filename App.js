import React, { Component } from 'react';
import { Text, Image, StyleSheet, ImageBackground,TouchableOpacity, TouchableHighlight, Button, Alert } from 'react-native';
import { Drawer, Body, Header} from 'native-base';

import Menu from './Components/Menu';

export default class App extends Component{
  closeDrawer() {
    this._drawer._root.close()
  };
  openDrawer() {
    this._drawer._root.open()
  };
  Baten(){
    alert('tes');
  };
  render(){
    return( 
      <Drawer ref={(ref) => { this._drawer = ref; }} content={<Menu   navigator={this._navigator} />} onClose={() => this.closeDrawer()} > 
        <ImageBackground source={require('./image/bekgron.jpg')}style={{flex : 1 }} >
          <Header style={Styles.header}>
            <Image source={require('./image/logo.png')} style={Styles.logo}/>
            <TouchableOpacity onPress={()=> this.openDrawer() }>
                <Image source={require('./image/burger.png')} style={Styles.burger}/>
            </TouchableOpacity>
          </Header> 
          <Text></Text>
          <Body style={Styles.body}>
            <Text style={Styles.teksbody}>Create your best experience in Bali</Text>    
            <TouchableHighlight style ={Styles.buttonbody} onPress={()=>{Alert.alert('TES','TES1')}}>
              <Text style={Styles.textbutton}>Book Now</Text>
            </TouchableHighlight>
          </Body>
        </ImageBackground>
      </Drawer>
      );
  }
}

const Styles = StyleSheet.create({
burger:{
  width :26,
  height :26,
  marginHorizontal : 60,
  marginVertical: 19
},
logo:{
  width : 250,
  height:50,
  marginHorizontal : 20,
  marginVertical: 10
},
header:{
  justifyContent : 'center',
  backgroundColor : '#ffffff',
  height : 70 ,
  flexDirection : "row",
},
body:{
  justifyContent : 'center',
  height : 500,
  marginLeft : 9
},
teksbody:{
  fontSize : 30,
  color : '#ffffff',
  fontWeight : 'bold'
},
buttonbody:{
  height: 40,
  width:110,
  borderRadius:10,
  backgroundColor : "#3B0001",
  marginLeft :-190,
  marginRight:50,
  marginTop :10,
  justifyContent : "center",
  alignItems : 'center'
},
textbutton:{
  color : "white",
  fontWeight : 'bold'
}
}); 