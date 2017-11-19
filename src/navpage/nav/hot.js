import React, { Component } from 'react';

import {
  View
} from 'react-native'

import {bindActionCreators} from 'redux';
import * as ListActions from '../../data/actions/actionsEvents'
import { connect } from 'react-redux';

import { api, Request } from '../../config/api'

import Scroll from '../../components/flatList/flatList'



class Hot extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {listData, actions} = this.props
    refresh = async () => {
      let response = await Request(api.hotList);
      actions.getHot(response)
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
  console.log(state.NewShowList.hotList)
  return {
    listData: state.NewShowList.hotList
  }
}, (dispatch) => ({
    actions: bindActionCreators(ListActions, dispatch)
  })
)(Hot)