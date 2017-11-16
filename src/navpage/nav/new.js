import React, { Component } from 'react';

import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  View
} from 'react-native'

import { api, Request } from '../../config/api'


class Scroll extends Component {
  async aaa() {
    let response = await Request(api.lastList);
    alert(JSON.stringify(response))
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:100, backgroundColor:'#ddd'}}>
          <Text onPress={this.aaa}>zheges banner</Text>
        </View>
        
        <FlatList
          onRefresh={this.aaa}
          refreshing={false}
          data={[{key: 'a'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: '1111'}]}
          renderItem={({item}) => <Text style={{height:30, backgroundColor: '#999', marginBottom: 5}}>{item.key}</Text>}
        />
      </View>
    )
  }
}

export default class New extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Scroll />
        {/* <Text>new</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({

})