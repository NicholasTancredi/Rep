import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'
import Meteor from 'react-native-meteor'

import store from './src/redux/store'
import Root from './src/modules/Root'

const hostUrl = 'ec2-54-68-253-146.us-west-2.compute.amazonaws.com'
Meteor.connect(`ws://${hostUrl}/websocket`)

class Rep extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Rep', () => Rep)
