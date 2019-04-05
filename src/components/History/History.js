import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>History Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
