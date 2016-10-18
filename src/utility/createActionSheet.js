import {ActionSheetIOS} from 'react-native'

const createActionSheet = (optionActions, cancel = 'Cancel') => (
    ActionSheetIOS.showActionSheetWithOptions({
            options: Object.keys(optionActions).concat(cancel),
            cancelButtonIndex: Object.keys(optionActions).length + 1,
        }, buttonIndex => (
            (optionActions[Object.keys(optionActions)[buttonIndex + 1]]) ? (
                optionActions[Object.keys(optionActions)[buttonIndex + 1]]
            ) : (
                () => {}
            )
        ))
)
