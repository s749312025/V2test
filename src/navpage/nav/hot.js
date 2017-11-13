import React, { Component } from 'react';

import {
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native'

import App from '../../counter/containers/app'

export default class NewBar extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <App />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})