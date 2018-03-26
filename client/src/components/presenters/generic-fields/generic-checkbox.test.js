import faker from 'faker'
import GenericCheckbox from './generic-checkbox'

describe('generic checkbox', () => {
  let randomWord

  beforeEach(() => {
    randomWord = faker.random.word()
  })

  describe('label', () => {
    test('adds title', () => {
      const subject = shallow(<GenericCheckbox title={randomWord} />)

      expect(subject.find('.checkbox-label').dive().text()).toEqual(randomWord)
    })
  })

  describe('checkbox', () => {
    test('adds disabled prop', () => {
      const subject = shallow(<GenericCheckbox disabled={randomWord} />)

      expect(subject.find('.checkbox').props().disabled).toEqual(randomWord)
    })
  })

  describe('value', () => {
    test('sets checked when created with value prop', () => {
      const subject = shallow(<GenericCheckbox value={randomWord} />)

      expect(subject.find('.checkbox').dive().props().checked).toEqual(randomWord)
    })

    test('defaults to checked being false when none is set', () => {
      const subject = shallow(<GenericCheckbox />)

      expect(subject.find('.checkbox').dive().props().checked).toEqual(false)
    })

    test('invokes on change when focus is lost', () => {
      const fakeOnChangeFn = jest.fn()
      const subject = shallow(<GenericCheckbox onChange={fakeOnChangeFn} />)
      subject.find('.checkbox').simulate('change', { target: { checked: randomWord } })

      expect(fakeOnChangeFn).toHaveBeenCalledWith(randomWord)
    })
  })
})
