import {StyleSheet} from 'react-native'
import {red} from '../../constants/colors'

export default StyleSheet.create({
    touchableOpacity: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        padding: 4,
        paddingTop: 16,
        paddingBottom: 16,
        marginLeft: 12,
        marginRight: 12,
        flexDirection: 'row',
    },

    textRed: {
        fontSize: 16,
        color: red,
    },

    text: {
        fontSize: 16,
        color: '#999',
    }
})
