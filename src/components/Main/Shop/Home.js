import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={{backgroundColor:'orange', justifyContent:'center', alignItems:'center', height: 50}}>
        <Text>Header Component</Text>
      </View>
    );
  }
}

export default class Home extends Component {
  static navigationOptions = {
    header: <Header/>
  }
  render() {
    return (
      <View style={{backgroundColor:'pink', justifyContent:'center', alignItems:'center'}}>
        <Text>Home</Text>
      </View>
    );
  }
}
