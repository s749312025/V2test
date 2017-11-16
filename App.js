/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import First from './src/first'

import {StatusBar, View} from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                {/* <StatusBar hidden={true} /> */}
                <StatusBar translucent ={true} backgroundColor={'#333'} barStyle={'light-content'}/>
                <First></First>
            </View>
        )
    }
}

