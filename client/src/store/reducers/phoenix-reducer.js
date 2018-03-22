import DEFAULT_STATE from './default-state'
import actionTypes from '../actionTypes'

function clearForm (state) {
  let newState = Object.assign({}, state)
  resetState(newState, 'color')
  resetState(newState, 'isAlive')
  resetState(newState, 'name')
  return newState
}

function resetState (state, field) {
  if (DEFAULT_STATE.phoenix[field] === undefined) {
    delete state[field]
  } else {
    state[field] = DEFAULT_STATE.phoenix[field]
  }
}

export default (state = DEFAULT_STATE.phoenix, action) => {
  switch (action.type) {
    case actionTypes.phoenix.RESET_STATE:
      return Object.assign({}, DEFAULT_STATE.phoenix)
    case actionTypes.phoenix.SET_PHOENIX_INFO:
      return Object.assign({}, state, action.value)
    case actionTypes.phoenix.CLEAR_FORM_DATA:
      return clearForm(state)
    case actionTypes.phoenix.UPDATE_PHOENIX:
      return Object.assign({}, state, action.value)
    default:
      return state
  }
}
