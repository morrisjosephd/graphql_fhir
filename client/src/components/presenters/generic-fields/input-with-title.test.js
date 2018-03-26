import InputWithTitle from './input-with-title'
import faker from 'faker'

describe('Input with Title', () => {
  let randomWord

  beforeEach(() => {
    randomWord = faker.random.word()
  })

  describe('label props', () => {
    test('adds title', () => {
      const subject = Shallow(<InputWithTitle title={randomWord} />)

      expect(subject.find('.input-label').dive().text()).toEqual(randomWord)
    })

    test('adds disabled', () => {
      const subject = Shallow(<InputWithTitle disabled={randomWord} />)

      expect(subject.find('.input-label').props().disabled).toEqual(randomWord)
    })

    test('adds error', () => {
      const subject = Shallow(<InputWithTitle error={randomWord} />)

      expect(subject.find('.input-label').props().error).toEqual(randomWord)
    })

    test('adds required', () => {
      const subject = Shallow(<InputWithTitle required={randomWord} />)

      expect(subject.find('.input-label').props().required).toEqual(randomWord)
    })
  })

  describe('input props', () => {
    test('adds placeholder', () => {
      const subject = Shallow(<InputWithTitle placeholder={randomWord} />)

      expect(subject.find('.input').props().placeholder).toEqual(randomWord)
    })

    test('adds disabled', () => {
      const subject = Shallow(<InputWithTitle disabled={randomWord} />)

      expect(subject.find('.input').props().disabled).toEqual(randomWord)
    })

    test('adds error', () => {
      const subject = Shallow(<InputWithTitle error={randomWord} />)

      expect(subject.find('.input').props().error).toEqual(randomWord)
    })

    test('adds required', () => {
      const subject = Shallow(<InputWithTitle required={randomWord} />)

      expect(subject.find('.input').props().required).toEqual(randomWord)
    })
  })

  describe('value', () => {
    test('sets the value when created with value prop', () => {
      const subject = Shallow(<InputWithTitle value={randomWord} />)

      expect(subject.find('.input').dive().props().value).toEqual(randomWord)
    })

    test('defaults to empty value when none is set', () => {
      const subject = Shallow(<InputWithTitle />)

      expect(subject.find('.input').dive().props().value).toEqual('')
    })

    test('does not invoke on change when the value is changed', () => {
      const fakeOnChangeFn = jest.fn()
      const subject = Shallow(<InputWithTitle onChange={fakeOnChangeFn} />)
      subject.find('.input').simulate('change', { target: { value: randomWord } })

      expect(fakeOnChangeFn).not.toHaveBeenCalled()
    })

    test('invokes on change when focus is lost', () => {
      const fakeOnChangeFn = jest.fn()
      const subject = Shallow(<InputWithTitle onChange={fakeOnChangeFn} />)
      subject.find('.input').simulate('change', { target: { value: randomWord } })
      subject.find('.input').simulate('blur')

      expect(fakeOnChangeFn).toHaveBeenCalledWith(randomWord)
    })
  })
})
