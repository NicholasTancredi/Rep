import React, {createElement} from 'react'
import {View} from 'react-native'
import styles from '../styles'
import MeteorListComponent from '../MeteorListComponent'

export default (props) =>
    <View style={[
        styles.container,
        props.contentContainerStyle,
    ]}>
        {createElement(
            MeteorListComponent(props)
        )}
    </View>
