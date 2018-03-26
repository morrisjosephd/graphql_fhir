import IsAliveCheckbox from './is-alive-checkbox'
import actionTypes from '../../../store/actionTypes'

describe('is alive checkbox', () => {
  test('sets the checkbox value to true when isAlive is true', () => {
    let { subject } = mountSubjectWithState(<IsAliveCheckbox />, { phoenix: { isAlive: true } })

    expect(subject.find('.checkbox').at(0).props().checked).toEqual(true)
  })

  test('sets the checkbox value to false when isAlive is false', () => {
    let { subject } = mountSubjectWithState(<IsAliveCheckbox />, { phoenix: { isAlive: false } })

    expect(subject.find('.checkbox').at(0).props().checked).toEqual(false)
  })

  test(`sends a ${actionTypes.phoenix.UPDATE_PHOENIX} event with is alive when checkbox is changed`, () => {
    let { subject, dispatchSpy } = mountSubjectWithState(<IsAliveCheckbox />, { phoenix: { isAlive: false } })

    subject.find('.checkbox').at(0).simulate('change', { target: { checked: true } })

    expect(dispatchSpy).toHaveBeenCalledWith({ type: actionTypes.phoenix.UPDATE_PHOENIX, value: { isAlive: true } })
  })
})
