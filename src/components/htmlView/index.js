import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

import HTMLView from 'react-native-htmlview';
import HTML from 'react-native-render-html';
const renderers = {
	br: () => <Text>{'\n'}</Text>
}

export default class HtmlView extends Component {
	constructor(props) {
		super(props);
		this.state = {content: this.props.value}
		//this.state.content = this.state.content.replace(new RegExp("<br />","g"), '<block></block>')
		/* this.state.content = this.state.content.replace(new RegExp("<p>","g"), '')
		.replace(new RegExp("</p>","g"), '<br />')
		this.state.content = '<p>'+this.state.content+'</p>' */
		console.log(this.state.content)
	}
	render() {
		return (
			<View>
				<HTML html={this.state.content} tagsStyles={this.props.stylesheet}  imagesMaxWidth={Dimensions.get('window').width-24} />
				{/* <HTMLView
					renderNode={this.renderNode}
					value = {this.state.content}
					stylesheet = {style(this.props.stylesheet)}
					onLinkPress={(url) => console.log('clicked link: ', url)}
				/> */}
			</View>
		)
	}
}
style = (styleObj) => {
	return StyleSheet.create(styleObj)
}