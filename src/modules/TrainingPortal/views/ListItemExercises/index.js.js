import React from 'react'

import {
    // View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default ({
    title,
    reps,
    sets,
    onPress,
}) => (
    <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={onPress}>
        <Text style={styles.textRed}>{
            (typeof title === 'string') ? (
                title.toUpperCase()
            ) : (title)
        }</Text>
        <Text style={styles.text}>{` - ${reps} reps / `}</Text>
        <Text style={styles.text}>{`${sets} sets`}</Text>
    </TouchableOpacity>
)
