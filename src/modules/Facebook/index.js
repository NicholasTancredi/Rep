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
    AccessToken
} from 'react-native-fbsdk'

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
                publishPermissions={
                    ["publish_actions"]
                }
                onLoginFinished = {
                    (error, result) => {
                        if (error) {
                            alert("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            alert("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then((data) => {
                                alert(data.accessToken.toString())
                            })
                        }
                    }
                }
                onLogoutFinished = {
                    ()=> alert("logout.")
                }
            />
        )
    }
}
