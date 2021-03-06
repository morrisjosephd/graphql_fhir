import { take, call, race, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getPhoenixDetails } from '../selectors/phoenix-selector'
import phoenixService from '../../services/phoenix-service'
import config from '../../config/dev.config'
import actionTypes from '../actionTypes'

export default function * runSaga () {
  while (true) {
    yield take(actionTypes.saga.SAVE_PHOENIX_DATA)

    const data = yield select(getPhoenixDetails)

    yield race({
      savePhoenixInfo: call(phoenixService.saveInfo, data),
      timeout: call(delay, config.timeout)
    })
  }
}
