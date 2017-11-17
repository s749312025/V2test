import React, { Component } from 'react';

import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  View
} from 'react-native'

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {item} = this.props;
    let image = 'https:' + item.member.avatar_normal
    return(
      <View style={styles.item}>
        <View>
          <Image style={styles.img} source={{uri:image}} />
          <Text>{item.member.username}</Text>
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
    padding: 10,
    marginBottom: 5
  },
  img: {
    height: 35,
    width: 35,
    borderRadius: 3,
    marginBottom: 10
  },
  title: {
    fontSize: 15,
    color: '#333'
  }
})