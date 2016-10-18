import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import styles from './styles'

import {
    LoginButton
} from 'react-native-fbsdk'
// ion-social-facebook
// import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
export default ({
    text,
    style,
    contentContainerStyle,
    onPress,
    publishPermissions,
    onLoginFinished,
    onLogoutFinished,
    onLayout,
    layout,
    textStyles
}) => (
    <TouchableOpacity
        style={styles.View}
    >
        <LoginButton
            style={[styles.LoginButton, layout]}
            publishPermissions = {publishPermissions}
            onLoginFinished = {onLoginFinished}
            onLogoutFinished = {onLogoutFinished}
        />
        <View
            pointerEvents={'none'}
            style={styles.Cover}
        />
        <Icon
            name="facebook"
            size={24}
            color="white"
            style={{
                marginRight: 6,
            }}
        />
        <Text pointerEvents={'none'} onLayout={onLayout} style={[styles.Text, textStyles]}>
         {text} WITH FACEBOOK</Text>

    </TouchableOpacity>
)
