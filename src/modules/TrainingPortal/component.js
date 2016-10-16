import React, {Component} from 'react'

import {
    LayoutAnimation,
} from 'react-native'

import wait from '../../utility/wait'
import handleUpdate from '../../utility/handleUpdate'

import ComponentView from './view'

export default class LocalComponent extends Component {
    constructor(props) {
        super(props)

        // this.state = {}
        this.handleUpdate = handleUpdate(this.props.update, this.props.state)

        this.handlePress = this.handlePress.bind(this)
    }

    componentWillUpdate() {
        // LayoutAnimation.easeInEaseOut()
    }

    handlePress() {
        const stateCount = this.props.state.count || 0
        const count = stateCount + 1
        this.handleUpdate({count})
    }

    render() {
        return (
            <ComponentView
                onPress={this.handlePress}
                text={this.props.state.count || 0}
            />
        )
    }
}
