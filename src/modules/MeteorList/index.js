import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native'

import {connect} from 'react-redux'

import Meteor from 'react-native-meteor'

import wait from '../../utility/wait'

const LocalListView = ({
    ready,
    collection,
    renderRow,
    selector,
    options,
    listViewRef,
    ActivityIndicatorProps = {},
}) => {
    if (!ready) return (
        <ActivityIndicator
            size={1}
            {...ActivityIndicatorProps}
        />
    )

    return (
        <Meteor.MeteorListView
            collection={collection}
            selector={selector}
            options={options}
            listViewRef={listViewRef}
            renderRow={renderRow}
        />
    )
}

const MeteorListComponent = (collection, renderRow, selector, options, ActivityIndicatorProps, listViewRef) =>
    Meteor.createContainer(() => {
        const handle = Meteor.subscribe(collection)

        return {
            ready: handle.ready(),
            collection,
            renderRow,
            selector,
            options,
            ActivityIndicatorProps,
            listViewRef,
        }
    }, LocalListView)

class MeteorList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.connectedMeteor) return (
            <ActivityIndicator
                size={1}
                {...this.props.ActivityIndicatorProps}
            />
        )

        this.List = MeteorListComponent(
            this.props.collection,
            this.props.renderRow,
            this.props.selector,
            this.props.options,
            this.props.ActivityIndicatorProps,
            this.props.listViewRef
        )

        const {List} = this

        return (
            <View style={[
                styles.container,
                this.props.contentContainerStyle,
            ]}>
                <List />
            </View>
        )
    }
}

export default connect(
    ({Connection}) => ({...Connection})
)(MeteorList)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
