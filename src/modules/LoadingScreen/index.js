import React, {
    Component,
} from 'react'

import {
    View,
    ActivityIndicator,
} from 'react-native'

export default () => (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <ActivityIndicator />
    </View>
)
