import {AsyncStorage} from 'react-native'

import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from 'redux'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import createActionBuffer from 'redux-action-buffer'
import {REHYDRATE} from 'redux-persist/constants'
import {autoRehydrate, persistStore} from 'redux-persist'

import reducers from './reducers'

const store = createStore(
	combineReducers(reducers),
	undefined,
	compose(
		autoRehydrate(),
		applyMiddleware(thunk,
			createActionBuffer(REHYDRATE),
			createLogger({
				collapsed: () => true
			})
		)
	)
)

persistStore(store, {
	storage: AsyncStorage,
}).purge()

export default store
