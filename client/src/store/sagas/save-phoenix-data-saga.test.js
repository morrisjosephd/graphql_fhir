import { take, call, race, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import faker from 'faker'
import config from '../../config/dev.config'
import actionTypes from '../actionTypes'
import phoenixService from '../../services/phoenix-service'

let getPhoenixDetailsSpy = jest.fn()
jest.setMock('../selectors/phoenix-selector', { getPhoenixDetails: getPhoenixDetailsSpy })

describe('save phoenix data saga', () => {
  const savePhoenixDataSaga = require('./save-phoenix-data-saga').default

  describe('happy path', () => {
    let gen = savePhoenixDataSaga()

    test(`listens for a ${actionTypes.saga.SAVE_PHOENIX_DATA} event`, () => {
      let nextAction = gen.next()

      expect(nextAction.value).toEqual(take(actionTypes.saga.SAVE_PHOENIX_DATA))
    })

    test('gathers phoenix data from the state', () => {
      let nextAction = gen.next()

      expect(nextAction.value).toEqual(select(getPhoenixDetailsSpy))
    })

    test('starts a race between saving info and timeout', () => {
      const fakeData = { random: faker.random.word() }
      let nextAction = gen.next(fakeData)

      expect(nextAction.value).toEqual(race({
        savePhoenixInfo: call(phoenixService.saveInfo, fakeData),
        timeout: call(delay, config.timeout)
      }))
    })

    test(`continues to listen for a ${actionTypes.saga.SAVE_PHOENIX_DATA} event`, () => {
      let nextAction = gen.next()

      expect(nextAction.value).toEqual(take(actionTypes.saga.SAVE_PHOENIX_DATA))
    })
  })
})
