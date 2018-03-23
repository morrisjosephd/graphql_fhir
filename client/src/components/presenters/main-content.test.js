import MainContent from './main-content'
import faker from 'faker'

describe('Main Content', () => {
  test('hides the form when show form is false', () => {
    const subject = Shallow(<MainContent showForm={false} />)

    expect(subject.find('.main-content').length).toEqual(0)
  })

  test('shows the form when show form is true', () => {
    const subject = Shallow(<MainContent showForm={true} />)

    expect(subject.find('.main-content').length).not.toEqual(0)
  })
})
