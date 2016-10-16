import {StyleSheet} from 'react-native'
import {red} from '../../constants/colors'

export default StyleSheet.create({
    flex : {
        flex: 1
    },

    navigatorCardStack : {
        flex: 20,
    },

    navigationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    NavigationHeader: {
        backgroundColor: red,
        borderBottomWidth: 0,
    },

    NavigationHeaderTitle: {
        color: 'white',
    },

    NavigationHeaderButton: {
        flex: 1,
        top: 0,
        bottom: 0,
        width: 44,
    },
})
