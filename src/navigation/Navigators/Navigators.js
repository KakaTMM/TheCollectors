import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Authentication from 'app/src/components/Authentication/Authentication';
import ChangeInfo from 'app/src/components/ChangeInfo/ChangeInfo';
import History from 'app/src/components/History/History';
import Menu from 'app/src/components/Main/Menu';
import Home from 'app/src/components/Main/Shop/Home';
import Search from 'app/src/components/Main/Shop/Search';
import Cart from 'app/src/components/Main/Shop/Cart';
import Contact from 'app/src/components/Main/Shop/Contact';
import Header from 'app/src/components/Main/Header';

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Search: Search,
    Cart: Cart,
    Contact: Contact
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Menu: TabNavigator,
    Authentication: Authentication,
    History: History,
    ChangeInfo: ChangeInfo
  },
  {
    initialRouteName: 'Menu'
  }
);

export default createAppContainer(DrawerNavigator);
