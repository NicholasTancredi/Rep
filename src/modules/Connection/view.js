import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'

import styles from './styles'

export default ({
    style,
    height,
    heightState,
    overflowContainerHeight = 0,
    text = 'Waiting For Connection',
    ViewProps = {},
    TextStyles,
    TextProps = {},
    ActivityIndicatorProps = {},
    onPress,
}) => (
    <View style={[styles.overflowContainer, {height: heightState}]}>
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                style,
                {height}
            ]} {...ViewProps}>

            <Text style={[styles.text, TextStyles]} {...TextProps}>
                {text}
            </Text>

            <ActivityIndicator
                size={1}
                color='white'
                {...ActivityIndicatorProps}
            />
        </TouchableOpacity>
    </View>
)
