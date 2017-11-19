import React, { Component } from 'react';

import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {timeConvert} from '../../config/common'

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {item} = this.props;
    let image = 'https:' + item.member.avatar_normal
    let time = timeConvert(item.last_touched, 'X').fromNow();
    return(
      <View style={styles.item}>
        <View style={styles.ceater}>
          <Image style={styles.img} source={{uri:image}} />
          <View style={styles.attach}>
            <View style={styles.firstline}>
              <Text>{item.member.username}</Text>
              <View style={styles.discuss}>
                <Text style={styles.node}>{item.node.title}</Text>
                <Icon style={styles.icon} name={ 'comment-text-outline' } size={13} color={'gray'} />
                <Text style={styles.count}>{item.replies}</Text>
              </View>
            </View>
            <Text style={styles.last}>最后回复：{time}</Text>
          </View>
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      //<Text style={{height:30, backgroundColor: '#999', marginBottom: 5}}>{item.content}</Text>
    )
  }
}

export default class Scroll extends Component {
  constructor(props) {
    super(props);
  }
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => {
    return (
      <ListItem 
        item = {item}
      />
    )
  }
  render() {
    const {listData, freshEvent} = this.props;

    return (
      <View style={{flex:1}}>
        <FlatList
          keyExtractor={this._keyExtractor}
          onRefresh={freshEvent}
          refreshing={false}
          data={listData}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8
  },
  ceater: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row'
  },
  img: {
    height: 35,
    width: 35,
    borderRadius: 3,
  },
  attach: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'space-between'
  },
  last: {
    fontSize: 12,
    color: '#aaa'
  },
  firstline: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  node: {
    fontSize: 10,
    color: '#999',
    padding: 5,
    marginRight: 10,
    backgroundColor: '#eee'
  },
  icon: {
    marginTop: 4,
    marginRight: 3
  },
  discuss: {
    flexDirection: 'row'
  },
  count: {
    color: '#aaa',
    marginTop: 2
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    color: '#333'
  }
})