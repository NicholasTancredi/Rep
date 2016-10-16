import actionCreator from '../../redux/utility/actionCreator'

export default actionTypes =>
    Object.keys(actionTypes).reduce((reduction, key) => ({
        ...reduction, [key.toLowerCase()]: actionCreator(actionTypes[key])
    }), {})
