import reducerMethods from './reducerMethods'
export default actionTypes =>
    Object.keys(actionTypes).reduce((reduction, key) => ({
        ...reduction,
        [actionTypes[key]]: reducerMethods[key.toLowerCase()]
    }), {})
