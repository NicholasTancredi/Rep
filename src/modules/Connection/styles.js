import {StyleSheet} from 'react-native'
import {blue} from '../../constants/colors'

export default StyleSheet.create({
    overflowContainer: {
        overflow: 'hidden',
        zIndex: -1,
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        backgroundColor: blue,
    },

    text: {
        paddingRight: 20,
        fontSize: 13,
        color: 'white',
    },
})
