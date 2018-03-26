import MainContentContainer from './main-content-container'

describe('top bar container', () => {
  test('does not display the form when the state tells it not to', () => {
    const fakeState = { presentation: { displayForm: false } }
    const { subject } = mountSubjectWithState(<MainContentContainer />, fakeState)

    expect(subject.find('.main-content').length).toEqual(0)
  })

  test('displays the form when the state tells it to', () => {
    const fakeState = { presentation: { displayForm: true } }
    const { subject } = mountSubjectWithState(<MainContentContainer />, fakeState)

    expect(subject.find('.main-content').length).not.toEqual(0)
  })
})
