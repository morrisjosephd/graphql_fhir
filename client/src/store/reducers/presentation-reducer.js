import DEFAULT_STATE from './default-state'
import actionTypes from '../actionTypes'

export default (state = DEFAULT_STATE.presentation, action) => {
  switch (action.type) {
    case actionTypes.presentation.RESET_STATE:
      return Object.assign({}, DEFAULT_STATE.presentation)
    case actionTypes.presentation.UPDATE_PROGRESS_INDICATOR:
      return Object.assign({}, state, { currentStep: action.stepNumber, progressTitle: action.title })
    case actionTypes.presentation.SHOW_FORM:
      return Object.assign({}, state, { displayForm: true })
    case actionTypes.presentation.HIDE_FORM:
      return Object.assign({}, state, { displayForm: false })
    default:
      return state
  }
}
