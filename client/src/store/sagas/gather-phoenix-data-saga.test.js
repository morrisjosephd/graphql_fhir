import actionTypes from '../actionTypes'
import { take, put, call, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import gatherPhoenixDataSaga from './gather-phoenix-data-saga'
import phoenixService from '../../services/phoenix-service'
import config from '../../config/dev.config'
import faker from 'faker'

describe('Gather phoenix data saga', () => {
  describe('happy path', () => {
    let gen = gatherPhoenixDataSaga()

    test(`listens for a ${actionTypes.saga.GATHER_PHOENIX_INFO} event`, () => {
      const nextAction = gen.next()

      expect(nextAction.value).toEqual(take(actionTypes.saga.GATHER_PHOENIX_INFO))
    })

    test('starts a race between calling searching by id and a timeout', () => {
      const fakeId = faker.random.number()
      const nextAction = gen.next({ type: actionTypes.saga.GATHER_PHOENIX_INFO, id: fakeId })

      expect(nextAction.value).toEqual(race({
        phoenixDetails: call(phoenixService.searchById, fakeId),
        timeout: call(delay, config.timeout)
      }))
    })

    test(`dispatches a ${actionTypes.phoenix.SET_PHOENIX_INFO} event`, () => {
      const fakePhoenixDetails = { random: faker.random.word() }
      const nextAction = gen.next({ phoenixDetails: fakePhoenixDetails })

      expect(nextAction.value).toEqual(put({ type: actionTypes.phoenix.SET_PHOENIX_INFO, value: fakePhoenixDetails }))
    })

    test(`dispatches a ${actionTypes.presentation.SHOW_FORM} event`, () => {
      const nextAction = gen.next()

      expect(nextAction.value).toEqual(put({ type: actionTypes.presentation.SHOW_FORM }))
    })

    test(`continues to listen for a ${actionTypes.saga.GATHER_PHOENIX_INFO} event`, () => {
      const nextAction = gen.next()

      expect(nextAction.value).toEqual(take(actionTypes.saga.GATHER_PHOENIX_INFO))
    })
  })

  describe('searching by id times out', () => {
    let gen, nextAction

    beforeEach(() => {
      gen = gatherPhoenixDataSaga()
      gen.next()
      gen.next({ })
      nextAction = gen.next({})
    })

    test(`continues to listen for a ${actionTypes.saga.GATHER_PHOENIX_INFO} event`, () => {
      expect(nextAction.value).toEqual(take(actionTypes.saga.GATHER_PHOENIX_INFO))
    })
  })
})
