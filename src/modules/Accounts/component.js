import React, {Component} from 'react'

import {
	View,
	Text,
	TextInput,
	Image,
	KeyboardAvoidingView,
	LayoutAnimation,
} from 'react-native'

import Meteor from 'react-native-meteor'

import styles from './styles'
import Facebook from '../Facebook'

import wait from '../../utility/wait'
import {red} from '../../constants/colors'

import AccountsView from './view'
import RowView from './rowView'

export default class AccountsComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeIndex: 0,
		}

		this.dataSource = [{
		    title: 'SIGN UP',
    	}, {
    	    title: 'LOG IN',
    	}]

        this.TextInputProps = {
            returnKeyType: 'done',
            keyboardAppearance: 'dark',
            selectionColor: red,
            ...this.props.TextInputProps,
            placeholderTextColor: this.props.placeholderTextColor,
        }

		this.renderRow = this.renderRow.bind(this)
        this.onChangeTab = this.onChangeTab.bind(this)
	}

    onChangeTab(activeIndex) {
        return wait(() => this.setState({activeIndex}))
    }

	getDefaultValue(title) {
		return name => (title[name]) ? (
            (title[name].props) ? (
                title[name].props.value
            ) : (
                ''
            )
        ) : (
            ''
        )
	}

    makeRef(title) {
        return name => r => title[name] = r
    }

	renderRow(props, sectionId, rowId) {
		this[props.title] = this[props.title] || {}

		return (
            <RowView
                key={rowId}
                textInputProps={this.TextInputProps}
                getDefaultValue={this.getDefaultValue(this[props.title])}
                makeRef={this.makeRef(this[props.title])}
            />
		)
	}

	render() {
		if (this.props.Connection.connectedMeteor
			&& this.props.Connection.connectedNet) {
		}

		if (this['SIGN UP']) console.warn(this['SIGN UP'])

		return (
            <AccountsView
                {...this.props}
                onChangeTab={this.onChangeTab}
                renderRow={this.renderRow}
                activeIndex={this.state.activeIndex}
            />
		)
	}
}
