import {StyleSheet} from 'react-native'
import {red} from '../../constants/colors'

export default StyleSheet.create({
    LoginButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    View: {
        alignItems: 'center',
    },

    Text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        // backgroundColor: red,
        borderWidth: 1,
        borderColor: 'white',
        padding: 16,
        paddingHorizontal: 32,
    },
})
