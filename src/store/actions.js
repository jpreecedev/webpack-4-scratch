export const ForwardsActions = {
  INCREMENT: 'INCREMENT'
}

export const forwardsAction = payload => ({
  type: ForwardsActions.INCREMENT,
  payload
})

export const BackwardsActions = {
  DECREMENT: 'DEINCREMENT'
}

export const backwardsAction = payload => ({
  type: BackwardsActions.DECREMENT,
  payload
})
