import React, { Component } from 'react';

import {
  View
} from 'react-native'

import {bindActionCreators} from 'redux';
import * as ListActions from '../../data/actions/actionsEvents'
import { connect } from 'react-redux';

import { api, Request } from '../../config/api'

import Scroll from '../../components/flatList/flatList'

class New extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
    const {listData, actions} = this.props
    refresh = async () => {
      let response = await Request(api.lastList);
      actions.getLatest(response)
    }
    return (
      <View style={{flex:1}}>
        <Scroll
          listData = {listData}
          freshEvent = {refresh}
        />
      </View>
    )
  }
}

export default connect ((state, myProps) => {
  return {
    listData: state.NewShowList.lastList
  }
}, (dispatch) => ({
    actions: bindActionCreators(ListActions, dispatch)
  })
)(New)