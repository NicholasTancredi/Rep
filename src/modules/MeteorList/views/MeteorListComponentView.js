import React from 'react'
import Meteor from 'react-native-meteor'
import {ActivityIndicator} from 'react-native'

export default ({
    ready,
    collection,
    renderRow,
    selector,
    options,
    listViewRef,
    ActivityIndicatorProps = {},
}) => (
    (ready) ? (
        <Meteor.MeteorListView 
            collection={collection}
            selector={selector}
            options={options}
            listViewRef={listViewRef}
            renderRow={renderRow}
        />
    ) : (
        <ActivityIndicator
            size={1}
            {...ActivityIndicatorProps}
        />
    )
)
