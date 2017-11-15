import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import commonStyles from '../../styles/common/common'


class Header extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.content}>
          <Text style={[styles.text, commonStyles.contentText]}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 8
  },
  text: {
    fontSize: 18
  }
})


export default Header;
