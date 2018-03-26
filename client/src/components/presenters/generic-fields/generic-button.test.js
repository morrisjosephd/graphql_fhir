import GenericButton from './generic-button'
import faker from 'faker'

describe('generic button', () => {
  let randomWord

  beforeEach(() => {
    randomWord = faker.random.word()
  })

  test('adds display text', () => {
    const subject = shallow(<GenericButton displayText={randomWord} />)

    expect(subject.find('.generic-button').dive().text()).toEqual(randomWord)
  })

  test('adds disabled prop', () => {
    const subject = shallow(<GenericButton disabled={randomWord} />)

    expect(subject.find('.generic-button').props().disabled).toEqual(randomWord)
  })

  test('adds alt prop', () => {
    const subject = shallow(<GenericButton alt={randomWord} />)

    expect(subject.find('.generic-button').props().alt).toEqual(randomWord)
  })

  test('adds onClick prop', () => {
    const subject = shallow(<GenericButton onClick={randomWord} />)

    expect(subject.find('.generic-button').props().onClick).toEqual(randomWord)
  })
})
