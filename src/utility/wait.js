import {InteractionManager} from 'react-native'

export default (func, duration = 0, thisArg, ...args) =>
    setTimeout(() =>
        InteractionManager.runAfterInteractions(() =>
            func.call(thisArg, ...args)
        )
    , duration)
