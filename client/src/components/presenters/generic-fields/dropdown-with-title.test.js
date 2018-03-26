import DropdownWithTitle from './dropdown-with-title'
import faker from 'faker'

describe('Dropdown with Title', () => {
  let randomWord

  beforeEach(() => {
    randomWord = faker.random.word()
  })

  describe('label props', () => {
    test('adds title', () => {
      const subject = shallow(<DropdownWithTitle title={randomWord} />)

      expect(subject.find('.dropdown-label').dive().text()).toEqual(randomWord)
    })

    test('adds required', () => {
      const subject = shallow(<DropdownWithTitle required={randomWord} />)

      expect(subject.find('.dropdown-label').props().required).toEqual(randomWord)
    })
  })

  describe('dropdown props', () => {
    test('adds alt', () => {
      const subject = shallow(<DropdownWithTitle alt={randomWord} />)

      expect(subject.find('.dropdown').props().alt).toEqual(randomWord)
    })

    test('adds options', () => {
      const subject = shallow(<DropdownWithTitle options={randomWord} />)

      expect(subject.find('.dropdown').props().options).toEqual(randomWord)
    })

    test('adds onChange', () => {
      const subject = shallow(<DropdownWithTitle onChange={randomWord} />)

      expect(subject.find('.dropdown').props().onChange).toEqual(randomWord)
    })

    test('adds value', () => {
      const subject = shallow(<DropdownWithTitle value={randomWord} />)

      expect(subject.find('.dropdown').props().value).toEqual(randomWord)
    })
  })
})
