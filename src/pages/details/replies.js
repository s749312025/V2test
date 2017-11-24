import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, Image } from 'react-native'

import HTMLView from 'react-native-htmlview';

import {api, Request} from '../../config/api'

import Loading from '../../components/loading'
import {timeConvert} from '../../config/common'

class Replies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[], loading: true};
    let id = props.id
    this.getData(id) 
  }
  getData = async (id) => {
    let response = await Request(api.replies, {topic_id: id})
    this.setState({data: response, loading: false})
    console.log(response)
  }
  render() {
    if(this.state.loading) {
      return(<View><Loading /></View>)
    }
    return(
      <View>
        <Re_item data={this.state.data}/>
      </View>
    );
  }
}

class Re_item extends Component {
  constructor(props, context) {
    super(props, context);
    //this.state = {data: this.props.data.reverse()}
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item, index}) => {
    let image = 'https:' + item.member.avatar_normal
    let time = timeConvert(item.last_modified, 'X').fromNow();
    let htmlContent = '<p>' + item.content_rendered + '</p>';
    return (
      <View style={styles.item}>
          <View style={styles.ceater}>
            <Image style={styles.img} source={{uri:image}} />
            <View style={styles.attach}>
              <Text>{item.member.username}</Text>
              <Text style={styles.time}>{index + 1}楼 {time}</Text>
            </View>
          </View>
          {/* <Text style={styles.content}>{item.content}</Text> */}
          {/* <Text style={styles.content}>{item.content_rendered}</Text> */}
          <HTMLView 
            value = {htmlContent}
            stylesheet={contentStyle}
            onLinkPress={(url) => console.log('clicked link: ', url)}
          />
      </View>
    )
  }
  render() {
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={this.props.data}
        renderItem={this._renderItem}
      />
    )
  }
}


export default Replies;
const contentStyle = StyleSheet.create({
  p: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333'
  }
})

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderTopWidth: .4,
    borderTopColor: '#ddd'
  },
  ceater: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row'
  },
  attach: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  time: {
    color: '#999',
    fontSize: 12
  },
  img: {
    height: 35,
    width: 35,
    marginTop: 3,
    borderRadius: 3,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333'
  }
})