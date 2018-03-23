import InputWithTitle from './input-with-title'
import faker from 'faker'

describe('Input with Title', () => {
  let subject

  beforeEach(() => {
    subject = Shallow(<InputWithTitle />)
  })

  test('fails', () => {
    const randomTitle = faker.random.word()
    const subject = Shallow(<InputWithTitle title={randomTitle} />)

    expect(subject.find('.input-label').dive().text()).toEqual(randomTitle)
  })
})
