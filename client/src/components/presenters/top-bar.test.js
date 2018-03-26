import TopBar from './top-bar'
import faker from 'faker'

describe('Top Bar', () => {
  test('clicking on button searches by id', () => {
    const randomId = faker.random.number()
    const fakeSearchFn = jest.fn()
    const subject = shallow(<TopBar search={fakeSearchFn} />)

    subject.find('.search-input').simulate('blur', { target: { value: randomId } })
    subject.find('.search-button').simulate('click')

    expect(fakeSearchFn).toHaveBeenCalledWith(randomId)
  })
})
