// import reducerCreator from '../../redux/utility/reducerCreator'
// import createAllReducers from '../../redux/utility/createAllReducers'

import actionTypes from './actionTypes'

import {
    NavigationExperimental,
} from 'react-native'

const {
    StateUtils: NavigationStateUtils,
    Transitioner: NavigationTransitioner,
} = NavigationExperimental

import initialState from './initialState'

const handle = {
    [actionTypes.POP](state) {
        const {tabs} = state
        const tabKey = tabs.routes[tabs.index].key
        const scenes = state[tabKey]
        const nextScenes = NavigationStateUtils.pop(scenes)

        if (scenes !== nextScenes) return {
            ...state,
            [tabKey]: nextScenes,
        }

        return state
    },

    [actionTypes.PUSH](state, payload) {
        const route = payload
        const {tabs} = state

        const tabKey = tabs.routes[tabs.index].key

        const scenes = state[tabKey]

        const nextScenes = NavigationStateUtils.push(scenes, route)

        if (scenes !== nextScenes) return {
            ...state,
            [tabKey]: nextScenes,
        }

        return state
    },

    [actionTypes.SELECT_TAB](state, payload) {
        const tabKey = payload
        
        const tabs = NavigationStateUtils.jumpTo(state.tabs, tabKey)

        if (tabs !== state.tabs) return {
            ...state,
            tabs,
        }

        return state
    },
}

import v4 from '../../utility/v4'

const reducer = (state = initialState, {type, payload}) => {
    if (type === 'BackAction') {
        type = actionTypes.POP
    }

    if (payload) {
        payload.key = payload.key || v4()
    }

    if (handle[type])
        return handle[type](state, payload)
    return state
}

export default reducer
