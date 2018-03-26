import PhoenixFormButtonsContainer from './phoenix-form-buttons-container'
import actionTypes from '../../../store/actionTypes'

describe('phoenix form buttons container', () => {
  let subject, dispatchSpy

  beforeEach(() => {
    let subjectWithState = mountSubjectWithState(<PhoenixFormButtonsContainer />)

    subject = subjectWithState.subject
    dispatchSpy = subjectWithState.dispatchSpy
  })

  test(`sends a ${actionTypes.phoenix.CLEAR_FORM_DATA} event when clear button is clicked`, () => {
    subject.find('.clear-button').simulate('click')

    expect(dispatchSpy).toHaveBeenCalledWith({ type: actionTypes.phoenix.CLEAR_FORM_DATA })
  })

  test(`sends a ${actionTypes.saga.SAVE_PHOENIX_DATA} event when save button is clicked`, () => {
    subject.find('.save-button').simulate('click')

    expect(dispatchSpy).toHaveBeenCalledWith({ type: actionTypes.saga.SAVE_PHOENIX_DATA })
  })
})
