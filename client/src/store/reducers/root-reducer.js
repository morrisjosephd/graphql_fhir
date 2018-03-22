import { combineReducers } from 'redux'
import phoenixReducer from './phoenix-reducer'
import presentationReducer from './presentation-reducer'

export default combineReducers({
  phoenix: phoenixReducer,
  presentation: presentationReducer
})
