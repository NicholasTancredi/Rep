import {
	StyleSheet,
} from 'react-native'

import {red} from '../../constants/colors'

export default StyleSheet.create({
	contentContainerStyle: {
		flex: 1,
		paddingTop: 24,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: red,
	},

	UnderlineView: {
		height: 18,
		position: 'absolute',
		bottom: 0,
		overflow: 'hidden',
		alignItems: 'center',
	},

	Triangle: {
		top: 12,
		width: 21,
		height: 21,
		transform: [{rotateZ: '45deg'}],
		backgroundColor: 'white',
	},

	KeyboardAvoidingView: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'white',
	},

	HorizontalTabStyles: {
		backgroundColor: red,
	},

	HorizontalTabTextStyles: {
		color: 'white',
	},

	HorizontalTabActiveTextStyles: {
		fontWeight: 'bold',
	},

	Image: {
		marginLeft: 8,
	},

	TextContainer: {
		padding: 8,
		marginTop: 12,
		maxWidth: 320,
	},

	Text: {
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
	},

	TextInput: {
		height: 48,
		paddingRight: 48,
		paddingLeft: 48,
	},

	hr: {
		left: 0,
		right: 0,
		marginLeft: 24,
		marginRight: 24,
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#ccc',
	},

	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'white',
	}
})
