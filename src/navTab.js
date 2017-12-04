import React, { Component } from 'react';

//import TabNavigator from 'react-native-tab-navigator';

import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native'

import { New, Hot, Node, My } from './navpage'

import Header from './components/header/header'

const NavList = [
  {tab: "New", title: "最新", icon: 'dropbox', component: New},
  {tab: "Hot", title: "最热", icon: 'google-photos', component: Hot},
  {tab: "Node", title: "主题", icon: 'gnome', component: Node},
  {tab: "My", title: "我的", icon: 'account', component: My},
]
/* {
  Home: {
    screen: New,
  },
  Profile: {
    screen: Hot,
  },
} */
let tabObj = {}
let changeEvent = {};

NavList.map((nav) => {
  tabObj[nav.title] = {
    screen: nav.component,
    navigationOptions: {
      tabBarLabel: nav.title,
      tabBarOnPress:(({ route, index },jumpToIndex)=>{
        console.log(changeEvent)
        changeEvent.ChangeThisTitle(nav.title)
        jumpToIndex(index);
      }),
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={nav.icon}
          size={25}
          color={focused ? '#4E78E7' : 'gray'}
          style={styles.icon}
        />
      ),
    }
  }
})

const RootTabs = TabNavigator(tabObj, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  backBehavior: 'none',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#4E78E7',
    inactiveTintColor: 'gray',
    indicatorStyle: {
      height: 0
    },
    labelStyle: {
      marginTop: 3,
      fontSize: 10
    },
    tabStyle: {
      paddingTop: 5
    },
    style: {
      backgroundColor: '#f8f8f8',
      borderTopWidth: 0.4,
      borderTopColor: '#c2c2c2',
      height: 50
    },
  }
});

export default class NavTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'New',
      selectedTitle: '最新'
    }
    global.navigation = this.props.navigation
  }
  static navigationOptions = ({navigation}) => {
    const {state} = navigation;
    console.log(state)
    return {headerTitle: `${state.params.title}`, headerRight: null, headerLeft: null}
  }
  ChangeThisTitle = (titleText) => {
    const {setParams} = this.props.navigation;
    setParams({ title: titleText })
  }
  render() {
    changeEvent.ChangeThisTitle = this.ChangeThisTitle
    return (
      <RootTabs/>
    )
  }
}


/* export default class NavTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'New',
      selectedTitle: '最新'
    }
    global.navigation = this.props.navigation
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
                renderIcon={() => <Icon style={styles.icon} name={ nav.icon } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon style={styles.icon} name={ nav.icon } size={25} color={'#4E78E7'}/>}
                onPress={() => this.setState({ selectedTab: nav.tab,  selectedTitle: nav.title})}><nav.component /></TabNavigator.Item>
            )
          })
        }
      </TabNavigator>
      </View>
    )
  }
} */

const styles = StyleSheet.create({
  icon: {
    marginBottom: -2
  }
})