import React, { Component } from 'react';
import { View, Text } from 'react-native'

import Spinkit from 'react-native-spinkit'

export default class Loading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Spinkit type={'Bounce'} size={40} color={'#b6d9ff'} />
                {/* <Text style={{color: '#aaa',fontSize: 10, marginTop: 10}}>加载中...</Text> */}
            </View>
        )
    }
}