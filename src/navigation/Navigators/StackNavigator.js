import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Authentication from 'app/src/components/Authentication/Authentication';
import ChangeInfo from 'app/src/components/ChangeInfo/ChangeInfo';
import History from 'app/src/components/History/History';
import Main from 'app/src/components/Main/Main';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title = 'To Main'
          onPress = {() => this.props.navigation.navigate('Main')}
        />
        <Button
          title = 'To Authentication'
          onPress = {() => this.props.navigation.navigate('Authentication')}
        />
        <Button
          title = 'To ChangeInfo'
          onPress = {() => this.props.navigation.navigate('ChangeInfo')}
        />
        <Button
          title = 'To History'
          onPress = {() => this.props.navigation.navigate('History')}
        />
      </View>
    );
  }
}

const StackNavigator = createStackNavigator(
  {
    Home: Home,
    Main: Main,
    Authentication: Authentication,
    ChangeInfo: ChangeInfo,
    History: History
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(StackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
