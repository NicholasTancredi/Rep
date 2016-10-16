// import createAllActions from '../../redux/utility/createAllActions'
import actionTypes from './actionTypes'

export const pop = () => ({
    type: actionTypes.POP,
})

export const push = payload => ({
    type: actionTypes.PUSH,
    payload,
})

export const selectTab = payload => ({
    type: actionTypes.SELECT_TAB,
    payload,
})

export default {
    pop,
    push,
    selectTab,
}
