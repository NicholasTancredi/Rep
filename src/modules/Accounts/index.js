import React, {Component} from 'react'

import {
	View,
	Text,
	TextInput,
	Image,
	KeyboardAvoidingView,
} from 'react-native'

const TextInputState = require('TextInputState')
import Meteor from 'react-native-meteor'

import styles from './styles'
import HorizontalTab from '../HorizontalTab'
import Facebook from '../Facebook'
import wait from '../../utility/wait'

const SIGN_UP = 'SIGN UP'
const LOG_IN = 'LOG IN'

class AccountsComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeIndex: 0,
		}

		this.dataSource = [
		   {
			   title: SIGN_UP,
		   }, {
			   title: LOG_IN,
		   }
	   ]

		this.renderRow = this.renderRow.bind(this)
	}

	getDefaultValue(item) {
		return item ? item.props.value : ''
	}

	renderRow(props, sectionId, rowId) {
		if (!this[props.title]) this[props.title] = {}
		return (
			<View key={rowId} style={{flex: 1,}}>
				<TextInput
					returnKeyType={'done'}
					style={styles.TextInput}
					ref={r => this[props.title].username = r}
					defaultValue={this.getDefaultValue(this[props.title].username)}
					placeholder={'Name'}
					placeholderTextColor={this.props.placeholderTextColor}
				 />
 				<View style={styles.hr} />
				 <TextInput
 					returnKeyType={'done'}
					style={styles.TextInput}
					ref={r => this[props.title].email = r}
					defaultValue={this.getDefaultValue(this[props.title].email)}
					placeholder={'Email'}
					placeholderTextColor={this.props.placeholderTextColor}
					keyboardType={'email-address'}
				/>
				<View style={styles.hr} />
				<TextInput
					returnKeyType={'done'}
					style={styles.TextInput}
					ref={r => this[props.title].password = r}
					defaultValue={this.getDefaultValue(this[props.title].password)}
					placeholder={'Password'}
					placeholderTextColor={this.props.placeholderTextColor}
					secureTextEntry={true}
				/>
			 </View>
		)
	}

	render() {
		if (this.props.hidden) return null

		if (this.props.Connection.connectedMeteor
			&& this.props.Connection.connectedNet) {
		}

		if (this.email) console.warn(this.email.props.value)

		return (
			<View style={styles.container}>
				<KeyboardAvoidingView
					behavior={'padding'}
					style={styles.KeyboardAvoidingView}>
						<View style={styles.contentContainerStyle}>

							<View style={styles.TextContainer}>
								<Text style={styles.Text}>
									{this.dataSource[this.state.activeIndex].title} WITH FACEBOOK
								</Text>
							</View>
						</View>
						<View

						><Facebook /></View>
						<HorizontalTab
							onChangeTab={activeIndex =>
								wait(() => this.setState({activeIndex}))
							}
							keyboardShouldPersistTaps={true}
							renderRow={this.renderRow}
							tabStyles={styles.HorizontalTabStyles}
							tabTextStyles={styles.HorizontalTabTextStyles}
							tabActiveTextStyles={styles.HorizontalTabActiveTextStyles}

							renderUnderline={({left, width}) =>
								<View style={[styles.UnderlineView, {
									left,
									width,
								}]}>
									<View style={styles.Triangle} />
								</View>
							}
							dataSource={this.dataSource}
						/>
						<TextInput
							autoFocus={true}
							returnKeyType={'done'}
						/>
				</KeyboardAvoidingView>
			</View>
		)
	}
}

import {connect} from 'react-redux'
import actions from './actions'

export default connect(
	({Accounts, Connection}) => ({...Accounts, Connection}), actions
)(AccountsComponent)
