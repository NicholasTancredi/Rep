import React, {Component} from 'react'

import {
    LayoutAnimation,
    View,
    Text,
} from 'react-native'

import wait from '../../utility/wait'
import handleUpdate from '../../utility/handleUpdate'

import ComponentView from './view'

import {
    AccessToken,
} from 'react-native-fbsdk'

export default class LocalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            layout: {},
        }

        this.handleUpdate = handleUpdate(
            this.props.update,
            this.props.state
        )
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    render() {
        return (
            <ComponentView
                publishPermissions={
                    ["publish_actions"]
                }
                layout={this.state.layout}
                text={this.props.text}
                textStyles={this.props.textStyles}
                onLayout={({nativeEvent}) => {
                    const {
                        y,
                        x,
                        width,
                        height,
                    } = nativeEvent.layout

                    const layout = {
                        top: y,
                        left: x,
                        width,
                        height,
                    }

                    this.setState({
                        layout
                    })
                }}
                onLoginFinished = {
                    (error, result) => {
                        if (error) {
                            console.warn("login has error: " + result.error)
                        } else if (result.isCancelled) {
                            console.warn("login is cancelled.")
                        } else {
                            AccessToken.getCurrentAccessToken().then((data) => {
                                console.warn(data.accessToken.toString())
                            })
                        }
                    }
                }
                onLogoutFinished = {
                    ()=> console.warn("logout.")
                }
            />
        )
    }
}
