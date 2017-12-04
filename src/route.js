import { StackNavigator } from 'react-navigation';

import NavTab from './navTab'
import Details from './pages/details'
import React, { Component } from 'react';
import {StatusBar, Button, View} from 'react-native'

const RootNavigator = StackNavigator({
  Tab: {
    screen: NavTab,
    /* navigationOptions: {
      header: null
    } */
    /* navigationOptions: {
      headerTitle: '123',
    } */
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: '帖子详情',
    }
  },
}, {
  initialRouteParams: {
    title: '最新'
  },
  navigationOptions: {
    headerStyle: {backgroundColor: '#333',paddingTop: StatusBar.currentHeight},
    headerTitleStyle: {color: '#ccc', fontWeight: 'normal', fontSize: 18, alignSelf:'center'},
    headerRight: <View/>,
    headerBackTitle: '返回',
    headerTintColor: '#ccc'
  }
});

export default RootNavigator;