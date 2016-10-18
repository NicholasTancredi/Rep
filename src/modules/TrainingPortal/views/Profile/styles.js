import {StyleSheet} from 'react-native'
// import {blue} from '../../constants/colors'

export default StyleSheet.create({
    TouchableOpacity: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
    },

    View: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    Image: {
        width: 96,
        height: 96,
        marginRight: 14,
        marginLeft: 4,
    },

    Text: {
        color: '#777',
        fontSize: 11,
    },

    Name: {
        color: red,
    },

    EditProfileText: {
        alignSelf: 'flex-start',
        marginTop: 4,
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: red,
        color: 'white',
    },

})
