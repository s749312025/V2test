import React, { Component } from 'react';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native'

import { New, Hot, Node, My } from './navpage'

const NavList = [
  {tab: "New", title: "最新", icon: 'dropbox', component: New},
  {tab: "Hot", title: "最热", icon: 'google-photos', component: Hot},
  {tab: "Node", title: "主题", icon: 'gnome', component: Node},
  {tab: "My", title: "我的", icon: 'account', component: My},
]

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
      <TabNavigator>
        {
          NavList.map((nav) => {
            return (
              <TabNavigator.Item
                key = {nav.tab}
                selected = {this.state.selectedTab === nav.tab}
                title={nav.title}
                //titleStyle={{marginBottom:2}}
                renderIcon={() => <Icon style={styles.icon} name={ nav.icon } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon style={styles.icon} name={ nav.icon } size={25} color={'#4E78E7'}/>}
                onPress={() => this.setState({ selectedTab: nav.tab })}><nav.component /></TabNavigator.Item>
            )
          })
        }
      </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: -2
  }
})