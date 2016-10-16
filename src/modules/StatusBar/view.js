import React from 'react'

import {
    StatusBar,
} from 'react-native'

export default ({
    hidden = false,
    showHideTransition = 'slide',
    animated = true,
    barStyle = 'light-content',
}) => (
    <StatusBar
        hidden={hidden}
        showHideTransition={showHideTransition}
        animated={animated}
        barStyle={barStyle}
    />
)
