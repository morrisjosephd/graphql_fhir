import NameInputContainer from './name-input-container'
import actionTypes from '../../../store/actionTypes'
import faker from 'faker'

describe('name input container', () => {
  let subject, dispatchSpy, fakeState

  beforeEach(() => {
    fakeState = { phoenix: { name: faker.random.word() } }

    let subjectWithState = mountSubjectWithState(<NameInputContainer />, fakeState)

    subject = subjectWithState.subject
    dispatchSpy = subjectWithState.dispatchSpy
  })

  test('sets the input value to the name from the state by default', () => {
    expect(subject.find('.input').at(0).props().value).toEqual(fakeState.phoenix.name)
  })

  test(`sends a ${actionTypes.phoenix.UPDATE_PHOENIX} event with name when input is changed`, () => {
    const fakeInput = faker.random.word()

    subject.find('.input').at(0).simulate('change', { target: { value: fakeInput } })
    subject.find('.input').at(0).simulate('blur')

    expect(dispatchSpy).toHaveBeenCalledWith({ type: actionTypes.phoenix.UPDATE_PHOENIX, value: { name: fakeInput } })
  })
})
