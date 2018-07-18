import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { DEFAULT_STATE } from './state'
import { ForwardsReducer, BackwardsReducer } from './reducers'

const rootReducer = combineReducers({
  forwards: ForwardsReducer,
  backwards: BackwardsReducer
})

export const initStore = (initialState = DEFAULT_STATE) =>
  createStore(rootReducer, initialState, composeWithDevTools())
