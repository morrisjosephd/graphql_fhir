import { take, put, call, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import phoenixService from '../../services/phoenix-service'
import config from '../../config/dev.config'
import actionTypes from '../actionTypes'

export default function * runSaga () {
  while (true) {
    const action = yield take(actionTypes.saga.GATHER_PHOENIX_INFO)

    const { phoenixDetails } = yield race({
      phoenixDetails: call(phoenixService.searchById, action.id),
      timeout: call(delay, config.timeout)
    })

    if (phoenixDetails === undefined) { continue }

    yield put({ type: actionTypes.phoenix.SET_PHOENIX_INFO, value: phoenixDetails })

    yield put({ type: actionTypes.presentation.SHOW_FORM })
  }
}
