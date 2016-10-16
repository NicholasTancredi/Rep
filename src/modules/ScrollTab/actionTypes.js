const actionTypes = [
    'UPDATE',
]

import name from './name'
import actionTypeCreator from '../../redux/utility/actionTypeCreator'
export default actionTypeCreator(`../modules/${name}`, actionTypes)
