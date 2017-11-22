import React, { Component } from 'react';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import {allReducers} from './data/reducers/allReducers';

import {
  View
} from 'react-native'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(allReducers);

import {
  Text,
  StyleSheet,
} from 'react-native'

import NavTab from './navTab'
import RootNavigator from './route'

export default class Home extends Component {
  render() {
    return (
      <Provider store={ store }>  
        <View style={{flex:1}}>
          <RootNavigator/>  
        </View>
      </Provider>
    )
  }
}

const style = StyleSheet.create({

})