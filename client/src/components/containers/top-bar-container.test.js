import TopBarContainer from './top-bar-container'
import actionTypes from '../../store/actionTypes'
import faker from 'faker'

describe('top bar container', () => {
  test(`dispatches a ${actionTypes.saga.GATHER_PHOENIX_INFO} event with passed in id`, () => {
    const fakeId = faker.random.word()
    const { subject, dispatchSpy } = mountSubjectWithState(<TopBarContainer />)

    subject.find('.search-input').at(0).simulate('blur', { target: { value: fakeId } })
    subject.find('.search-button').simulate('click')

    expect(dispatchSpy).toHaveBeenCalledWith({ type: actionTypes.saga.GATHER_PHOENIX_INFO, id: fakeId })
  })
})
