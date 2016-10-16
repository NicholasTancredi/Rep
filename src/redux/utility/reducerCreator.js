export default (handler, initialState = {}) =>
	(state = initialState, action = {}) => {
        const {
    		type,
    		payload
    	} = action
        
		if (handler[type]) return handler[type](state, payload)
		return state
	}
