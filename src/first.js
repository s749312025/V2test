import React, { Component } from 'react';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import {allReducers} from './data/reducers/allReducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(allReducers);

import {
  Text,
  StyleSheet,
} from 'react-native'

import Route from './route'

export default class Home extends Component {
  render() {
    return (
      <Provider store={ store }>  
        <Route/>  
      </Provider>
    )
  }
}

const style = StyleSheet.create({

})