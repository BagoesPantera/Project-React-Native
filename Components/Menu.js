import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import{Content, List, Right, Left, Body, ListItem, } from 'native-base';

export default class Menu extends Component{
    render(){
        return(
            <Content style={Styles.content}>
                <View style={Styles.viewprofil}>
                    <Image source={require('../image/propil.jpg')} style={Styles.profil}/>
                    <Text style={Styles.username}>Suspect 1632654</Text>
                    <Text></Text>
                </View>
                <List>
                    <ListItem>
                        <Left>
                            <Image source={require('../image/user.png')} style={Styles.user}></Image>
                        </Left>
                        <Body>
                            <Text>Profile</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Image source={require('../image/list.png')} style={Styles.user}></Image>
                        </Left>
                        <Body>
                            <Text>Book List</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Image source={require('../image/gear.png')} style={Styles.user}></Image>
                        </Left>
                        <Body>
                            <Text>Settings</Text>
                        </Body>
                    </ListItem>
                </List>
                <View style={Styles.bawah}>
                    <List>
                        <ListItem>
                            <Left >
                            <TouchableOpacity>
                                <Image  source={require('../image/bug.png')} style={Styles.user}></Image></TouchableOpacity>
                            </Left>
                            <Right>
                                <Image source={require('../image/signout.png')} style={Styles.user}></Image>
                            </Right>
                        </ListItem>
                    </List>
                </View>
            </Content>
        );
    }
}
const Styles = StyleSheet.create({
profil :{
    width : 140,
    height : 140,
    borderRadius: 100,
    marginTop : 10
},
user:{
    width : 30,
    height : 30
},
bawah:{
    marginTop : 175,
    borderTopColor : 'black',
    borderTopWidth : 2
},
content:{
    backgroundColor : '#ffffff',
    height : 10,
},
viewprofil:{
    justifyContent : 'center',
    alignItems : 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    backgroundColor : '#E3E3E3',
},
username:{
    fontSize  : 18,
    fontWeight : 'bold'
}
});