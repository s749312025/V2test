import React, { Component } from 'react';

import { View, Text, ScrollView } from 'react-native'

import Details from './details'
import Replies from './replies'

class AllReplies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const params = this.props.navigation.state.params
    return(
      <ScrollView>
        <Details info={params} />
        <Replies id={params.id}/>
      </ScrollView>
    );
  }
}


export default AllReplies;