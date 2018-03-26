import ColorDropdown from './color-dropdown'
import actionTypes from '../../../store/actionTypes'

describe('color dropdown', () => {
  test('sets the dropdown value to color on the state', () => {
    let { subject } = mountSubjectWithState(<ColorDropdown />, { phoenix: { color: 'red' } })

    expect(subject.find('.dropdown').at(0).props().value).toEqual('red')
  })

  test(`sends a ${actionTypes.phoenix.UPDATE_PHOENIX} event with selected color when changed`, () => {
    let { subject, dispatchSpy } = mountSubjectWithState(<ColorDropdown />, { phoenix: { color: 'blue' } })

    subject.find('.dropdown').at(1).simulate('change', { target: { value: 'red' } })

    expect(dispatchSpy).toHaveBeenCalledWith({ type: actionTypes.phoenix.UPDATE_PHOENIX, value: { color: 'red' } })
  })
})
