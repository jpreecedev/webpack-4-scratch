import { ForwardsActions, BackwardsActions } from './actions'
import { DEFAULT_STATE } from './state'

export const ForwardsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ForwardsActions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
  }
  return state
}

export const BackwardsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case BackwardsActions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
  }
  return state
}
