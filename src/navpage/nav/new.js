import React, { Component } from 'react';

import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  View
} from 'react-native'

import {bindActionCreators} from 'redux';
import * as ListActions from '../../data/actions/actionsEvents'
import { connect } from 'react-redux';

import { api, Request } from '../../config/api'

import Scroll from '../../components/flatList/flatList'

/* class Scroll extends Component {
  constructor(props) {
    super(props);
  }
  async aaa() {
    let response = await Request(api.lastList);
    return response
  }
  render() {
    const {sss,listDate,actions} = this.props;
    ttt = async () => {
      actions.getLatest( await this.aaa() )
    }
    return (
      <View style={{flex:1}}>
        <FlatList
          onRefresh={ttt}
          refreshing={false}
          data={listDate}
          renderItem={({item}) => <Text style={{height:30, backgroundColor: '#999', marginBottom: 5}}>{item.content}</Text>}
        />
      </View>
    )
  }
} */

class New extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
    const {listData, actions} = this.props
    refresh = async () => {
      console.log(1)
      let response = await Request(api.lastList);
      actions.getLatest(response)
    }
    return (
      <View style={{flex:1}}>
        <Scroll
          //freshUrl = {api.lastList}
          listData = {listData}
          freshEvent = {refresh}
        />
      </View>
    )
  }
}

export default connect ((state, myProps) => {
  console.log(state.NewShowList.lastList)
  return {
    listData: state.NewShowList.lastList
  }
}, (dispatch) => ({
    actions: bindActionCreators(ListActions, dispatch)
  })
)(New)