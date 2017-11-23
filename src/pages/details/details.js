import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native'

import {timeConvert} from '../../config/common'

class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.info)
  }

  render() {
    const item = this.props.info;
    let image = 'https:' + item.member.avatar_normal
    let time = timeConvert(item.created, 'X').format('lll');
    return(
      <View style={styles.item} activeOpacity={0.8} onPress={() => {this.navigatorTo(item)}}>
        <View style={styles.ceater}>
          <Image style={styles.img} source={{uri:image}} />
          <View style={styles.attach}>
            <View style={styles.firstline}>
              <Text>{item.member.username}</Text>
              <View style={styles.discuss}>
                <Text onPress={() => {alert(123)}} style={styles.node}>{item.node.title}</Text>
              </View>
            </View>
            <Text style={styles.last}>创建于：{time}</Text>
          </View>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.content}><Text style={styles.contentText}>{item.content}</Text></View>
      </View>
    );
  }
}


export default Details;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8
  },
  ceater: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  img: {
    height: 35,
    width: 35,
    marginTop: 3,
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
  discuss: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    color: '#333'
  },
  content: {
    marginTop: 5,
    paddingTop: 5,
    borderTopWidth: .5,
    borderTopColor: '#ddd'
  },
  contentText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#666'
  }
})