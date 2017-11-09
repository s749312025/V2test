import React, { Component } from 'react';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native'

class NewBar extends Component {
  render() {
    return (
      <View style={{backgroundColor:"red", flex:1}}>
        <Text>new</Text>
      </View>
    )
  }
}

class Hot extends Component {
  render() {
    return (
      <View style={{backgroundColor:"yellow", flex:1}}>
        <Text>Hot</Text>
      </View>
    )
  }
}

export default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'New'
    }
  }

  render() {
    return(
      <View style={{flex:1}}>
      <TabNavigator
        tabBarStyle={{height: 50}}
      >
        <TabNavigator.Item
          selected = {this.state.selectedTab === 'New'}
          title='最新'
          renderIcon={() => <Icon style={styles.icon} name={ 'dropbox' } size={25} color={'gray'}/>}
          renderSelectedIcon={() => <Icon style={styles.icon} name={ 'dropbox' } size={25} color={'#4E78E7'}/>}
          onPress={() => this.setState({ selectedTab: 'New' })}><NewBar /></TabNavigator.Item>
        <TabNavigator.Item
          selected = {this.state.selectedTab === 'Hot'}
          title='最热'
          renderIcon={() => <Icon style={styles.icon} name={ 'google-photos' } size={25} color={'gray'}/>}
          renderSelectedIcon={() => <Icon style={styles.icon} name={ 'google-photos' } size={25} color={'#4E78E7'}/>}
          onPress={() => this.setState({ selectedTab: 'Hot' })}><Hot /></TabNavigator.Item>
          <TabNavigator.Item
          selected = {this.state.selectedTab === 'Node'}
          title='主题'
          renderIcon={() => <Icon style={styles.icon} name={ 'gnome' } size={25} color={'gray'}/>}
          renderSelectedIcon={() => <Icon style={styles.icon} name={ 'gnome' } size={25} color={'#4E78E7'}/>}
          onPress={() => this.setState({ selectedTab: 'Node' })}><NewBar /></TabNavigator.Item>
          <TabNavigator.Item
          selected = {this.state.selectedTab === 'My'}
          title='我的'
          renderIcon={() => <Icon style={styles.icon} name={ 'account' } size={25} color={'gray'}/>}
          renderSelectedIcon={() => <Icon style={styles.icon} name={ 'account' } size={25} color={'#4E78E7'}/>}
          onPress={() => this.setState({ selectedTab: 'My' })}><Hot /></TabNavigator.Item>
      </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3
  }
})