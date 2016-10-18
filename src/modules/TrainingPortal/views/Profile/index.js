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
    }

    componentWillUpdate() {
        // LayoutAnimation.easeInEaseOut()
    }

    render() {
        return (
            <ComponentView
                {...this.props
            />
        )
    }
}
