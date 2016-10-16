import {StyleSheet} from 'react-native'
import {red} from '../../../constants/colors'

export default StyleSheet.create({
    tabs : {
        height: 49,
        flexDirection: 'row',
        backgroundColor: 'white',
    },

    tabIcon: {
        width: 30,
        height: 30,
    },

    title: {
        fontSize: 9,
        color: red,
    },

    tabBarItemTouchableOpacity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    activeIconContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        backgroundColor: 'white',
    },

    selectedActiveIconContainer: {
        opacity: 1,
    },

    tabBarItemView: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    badgeView: {
        position: 'absolute',
        top: -4,
        right: -11,
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: red,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 12,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: StyleSheet.hairlineWidth,
        paddingBottom: StyleSheet.hairlineWidth,
    },

    badgeText: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
    },
})
