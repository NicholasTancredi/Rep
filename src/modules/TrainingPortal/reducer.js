import reducerCreator from '../../redux/utility/reducerCreator'
import createAllReducers from '../../redux/utility/createAllReducers'

import actionTypes from './actionTypes'

export default reducerCreator(
    createAllReducers(actionTypes)
)
