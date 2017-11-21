import React, { Component } from 'react';

import { View, Text } from 'react-native'

import Details from './details'
import Replies from './replies'

class AllReplies extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <View>
        <Details />
        <Replies />
      </View>
    );
  }
}


export default AllReplies;