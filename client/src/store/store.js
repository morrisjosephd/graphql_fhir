import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/root-reducer'
import gatherPhoenixInfoSaga from './sagas/gather-phoenix-data-saga'
import savePhoenixInfoSaga from './sagas/save-phoenix-data-saga'
import config from '../config/dev.config'

function initialize () {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), config.getReduxTools()))

  sagaMiddleware.run(gatherPhoenixInfoSaga)
  sagaMiddleware.run(savePhoenixInfoSaga)

  window.Store = store

  return store
}

export default { initialize }
