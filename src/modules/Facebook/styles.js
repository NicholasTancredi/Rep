import {StyleSheet} from 'react-native'
import {red} from '../../constants/colors'

export default StyleSheet.create({
    LoginButton: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: red,
    },

    View: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        padding: 16,
        paddingHorizontal: 24,
        flexDirection: 'row',
        backgroundColor: red,
    },

    Cover: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: red,
    },

    Text: {
        textAlign: 'center',
        backgroundColor: red,
    },
})
