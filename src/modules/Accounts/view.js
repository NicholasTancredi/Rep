import React from 'react'

import {red} from '../../constants/colors'

import styles from './styles'
import HorizontalTab from '../HorizontalTab'

import Facebook from '../Facebook'

import {
    View,
    Image,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native'

export default ({
    dataSource,
    activeIndex,
    renderRow,
}) => (
    <View style={styles.container}>
        <KeyboardAvoidingView
            behavior={'padding'}
            style={styles.KeyboardAvoidingView}>

            <View style={styles.contentContainerStyle}>
                <Image
                    source={require('../../images/logo-white.png')}
                    style={styles.Image}
                    resizeMode={'contain'}
                />

                <View style={styles.TextContainer}>
                    <Facebook
                        textStyles={styles.Text}
                        text={dataSource[activeIndex].title}
                    />
                </View>

            </View>

            <HorizontalTab
                onChangeTab={onChangeTab}
                keyboardShouldPersistTaps={true}
                renderRow={renderRow}
                tabStyles={styles.HorizontalTabStyles}
                tabTextStyles={styles.HorizontalTabTextStyles}
                tabActiveTextStyles={
                    styles.HorizontalTabActiveTextStyles
                }
                renderUnderline={({left, width}) =>
                    <View style={[styles.UnderlineView, {
                        left,
                        width,
                    }]}>
                        <View style={styles.Triangle} />
                    </View>
                }
                dataSource={dataSource}
            />
            <TextInput
                autoFocus={true}
                returnKeyType={'done'}
                keyboardAppearance='dark'
                selectionColor={red}
            />
        </KeyboardAvoidingView>
    </View>
)
