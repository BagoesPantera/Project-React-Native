import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Header extends Component{
    render(){
        return (
        <View style={{
            justifyContent : 'center',
            backgroundColor : '#ffffff',
            height : 70,
            flexDirection : "row",
        }}>
            <Text style={{
                fontSize : 25,
                fontWeight : 'bold',
                marginHorizontal : 90,
                marginVertical: 20 
                }}>Explore Bali</Text>
            <TouchableOpacity onPress={()=> alert('TES')}>
                <Image source={require('../image/burger.png')} style={Styles.burger}/></TouchableOpacity>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    burger:{
        width :26,
        height :26,
        marginHorizontal : 90,
        marginVertical: 20
    }
})