import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import DrawerNavigator from 'app/src/navigation/Navigators/DrawerNavigator';

export default class Main extends Component {
  render() {
    return (
        <DrawerNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
