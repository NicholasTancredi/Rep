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

export default ({
    text,
    style,
    contentContainerStyle,
    onPress,
    publishPermissions,
    onLoginFinished,
    onLogoutFinished,
}) => (
    <TouchableOpacity>
        <LoginButton
            style={styles.LoginButton}
            publishPermissions = {publishPermissions}
            onLoginFinished = {onLoginFinished}
            onLogoutFinished = {onLogoutFinished}
        />
        <View
            // pointerEvents={'none'}
            style={styles.View}
        >
        <Text
            style={styles.Text}>Log in with Facebook</Text>
        </View>
    </TouchableOpacity>
)
