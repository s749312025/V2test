import React, { Component } from 'react';

import { View, Text, ScrollView } from 'react-native'

import Details from './details'
import Replies from './replies'

class AllReplies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ScrollView>
        <Details info={this.props.navigation.state.params} />
        <Replies />
      </ScrollView>
    );
  }
}


export default AllReplies;