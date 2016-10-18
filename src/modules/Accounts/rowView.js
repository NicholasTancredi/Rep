import React from 'react'

import styles from './styles'
import HorizontalTab from '../HorizontalTab'
import {red} from '../../constants/colors'

import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native'

const TextInputProps = placeholderTextColor => ({
    style: styles.TextInput,
    returnKeyType: 'done',
    keyboardAppearance: 'dark',
    selectionColor: red,
    placeholderTextColor,
})

export default ({
    dataSource,
    activeIndex,
    getDefaultValue,
    makeRef,
    textInputProps,
}) => (
    <View key={rowId} style={styles.textInputContainer}>
         <TextInput
            ref={makeRef('email')}
            defaultValue={getDefaultValue('email')}
            placeholder={'Email'}
            keyboardType={'email-address'}

            {...textInputProps}
            style={[styles.TextInput, textInputProps.style]}
        />
        <View style={styles.hr} />
        <TextInput
            ref={makeRef('password')}
            defaultValue={getDefaultValue('password')}
            placeholder={'Password'}
            secureTextEntry={true}

            {...textInputProps}
            style={[styles.TextInput, textInputProps.style]}
        />
     </View>
)
