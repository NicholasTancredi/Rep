import React from 'react'

import {
    // View,
    Text,
    TouchableOpacity,
} from 'react-native'

import styles from './styles'

export default ({
    text,
    style,
    contentContainerStyle,
    onPress,
}) => (
    <TouchableOpacity onPress={onPress}
        style={[styles.contentContainer, contentContainerStyle]}>
        <Text style={[styles.content, style]}>
            {text}
        </Text>
    </TouchableOpacity>
)
