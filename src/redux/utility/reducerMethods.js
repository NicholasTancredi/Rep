export default {
    update: (state, payload) => ({...state, ...payload}),

    replace: (state, payload) => [...payload],

    push: (state, payload) => state.concat([payload]),

    pop: (state, payload) => {
        const result = [...state]
        result.pop()
        return result
    },
}
