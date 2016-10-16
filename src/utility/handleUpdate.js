export default (update, state) => props =>
    update(Object.keys(props).reduce((nextState, key) => {
        const value = props[key]
        if (state[key] !== value) nextState[key] = value
        return nextState
    }, {}))
