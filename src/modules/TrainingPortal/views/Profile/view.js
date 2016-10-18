import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'

import styles from './styles'

export default ({
    username,
    avatar,
    buttonText,
    onPressButton,
    onPressImage,
}) =>
    <View style={styles.TouchableOpacity}>
        <View style={styles.View}>
            <TouchableOpacity onPress={onPressImage}>
                <Image
                    source={{uri: avatar}}
                    style={styles.Image}
                />
            </TouchableOpacity>
            <View>
                <Text style={styles.Name}>{username}</Text>
                <Text style={styles.Text}></Text>
                <Text style={styles.Text}></Text>
                <View>
                    <TouchableOpacity style={{flex: 1}} onPress={onPressButton}>
                        <Text style={styles.EditProfileText}>
                            {buttonText}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
