import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import styles from './styles'
import HorizontalTab from '../HorizontalTab'

export default ({
    text,
    style,
    contentContainerStyle,
    onPress,
}) => (
    <HorizontalTab dataSource={[
        {
            title: 'Exercises',
            collection: 'collection-exercises',
        }, {
            title: 'Sessions',
            collection: 'collection-sessions',
        }, {
            title: 'Programs',
            collection: 'collection-programs',
        }
    ]} />
)
