import React, {Component} from 'react'

import {
    NetInfo,
    LayoutAnimation,
} from 'react-native'

import wait from '../../utility/wait'
import handleUpdate from '../../utility/handleUpdate'
import {getData} from 'react-native-meteor'
import ConnectionView from './view'

class ConnectionComponent extends Component {
    constructor(props) {
        super(props)

        this.defaultProps = {
            height: 24,
        }

        this._props = {
            ...this.defaultProps,
            ...this.props,
        }

        this.initialState = {
            height: 0,
        }

        this.activeState = {
            height: this._props.height,
        }

        const {
            connectedNet,
            connectedMeteor,
        } = this.props

        if (connectedNet && connectedMeteor) {
            this.state = {
                ...this.initialState
            }
        } else {
            this.state = {
                ...this.activeState
            }
        }

        this.handleUpdate = handleUpdate(this.props.update, this.props)
        this.handleConnection = this.handleConnection.bind(this)

        NetInfo.fetch().done(this.handleConnection)

        wait(() => {
            NetInfo.addEventListener(
                'change',
                this.handleConnection
            )
        })

        const Data = getData()

        Data.ddp.on('connected', () => {
            this.handleUpdate({connectedMeteor: true})
        })

        Data.ddp.on('disconnected', () => {
            this.handleUpdate({connectedMeteor: false})
        })
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    handleConnection(reach) {
        this.handleUpdate({connectedNet: reach !== 'none'})
    }

    render() {
        const {
            connectedNet,
            connectedMeteor,
        } = this.props

        if (connectedNet && connectedMeteor) {
            this._state = {
                ...this.initialState
            }
        } else {
            this._state = {
                ...this.activeState
            }
        }

        return (
            <ConnectionView
                onPress={() => this.setState(this.initialState)}
                style={this._props.style}
                height={this._props.height}
                heightState={this._state.height}
            />
        )
    }
}

import {connect} from 'react-redux'

import actions from './actions'

export default connect(
    ({Connection}) => ({...Connection}), actions
)(ConnectionComponent)
