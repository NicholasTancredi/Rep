import React, {Component} from 'react'

import {
    LayoutAnimation,
} from 'react-native'
import Meteor from 'react-native-meteor'

import wait from '../../utility/wait'
import handleUpdate from '../../utility/handleUpdate'

import ComponentView from './view'

export default class LocalComponent extends Component {
    constructor(props) {
        super(props)

        // this.state = {}
        this.handleUpdate = handleUpdate(this.props.update, this.props.state)
        Meteor.userId()
        this.user = route.user
            || user
            || {username: 'no username', emails: [{address: 'no email'}]}

            const username = thisUser.username
            || thisUser.emails[0].address

            const avatar = thisUser.avatar
            || 'https://s3-us-west-2.amazonaws.com/rep-app-image-video/static/avatar.png'

            const routeTitle = route.realTitle
            || route.title

            const selector = {
                userIds: thisUser._id
            }

            lastUserId = thisUser._id
            let buttonText = 'Follow'

            if (user._id === thisUser._id) {
                buttonText  = 'Edit Profile'
            }

        this.dataSource = {
            title: 'Exercises',
            collection: 'collection-exercises',
            renderRow: (item, sectionId, rowId) => (
                <ListItemExercises
                    title={item.title}
                    reps={item.reps}
                    sets={item.sets}
                    onPress={() => {
                    }}
                />
            )
        }, {
            title: 'Sessions',
            collection: 'collection-sessions',
            renderRow: (item, sectionId, rowId) => (
                <ListItemSessions
                    title={item.title}
                    reps={item.reps}
                    sets={item.sets}
                    onPress={() => {
                    }}
                />
            )
        }, {
            title: 'Programs',
            collection: 'collection-programs',
            renderRow: (item, sectionId, rowId) => (
                <ListItemPrograms
                    title={item.title}
                    reps={item.reps}
                    sets={item.sets}
                    onPress={() => {
                    }}
                />
            )
        }
    }

    componentWillUpdate() {
        // LayoutAnimation.easeInEaseOut()
    }

    render() {
        return (
            <ComponentView
                {...this.props}
                dataSource={this.dataSource}
            />
        )
    }
}
