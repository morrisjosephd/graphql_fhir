import MainContent from './main-content'

describe('Main Content', () => {
  test('hides the form when show form is false', () => {
    const subject = shallow(<MainContent showForm={false} />)

    expect(subject.find('.main-content').length).toEqual(0)
  })

  test('shows the form when show form is true', () => {
    const subject = shallow(<MainContent showForm />)

    expect(subject.find('.main-content').length).not.toEqual(0)
  })
})
