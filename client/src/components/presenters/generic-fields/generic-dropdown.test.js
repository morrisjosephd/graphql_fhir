import GenericDropdown from './generic-dropdown'
import faker from 'faker'

describe('Generic Dropdown', () => {
  let options, numberOfOptions

  beforeEach(() => {
    numberOfOptions = faker.random.number({ min: 2, max: 10 })

    options = Array.from(Array(numberOfOptions), () => ({
      text: faker.random.word(),
      value: faker.random.word()
    }))
  })

  describe('options', () => {
    test('renders the correct number of options', () => {
      const subject = Shallow(<GenericDropdown options={options} />)

      expect(subject.find('option').length).toEqual(numberOfOptions + 1)
    })

    test('each option has the correct title', () => {
      const subject = Shallow(<GenericDropdown options={options} />)
      const allTitles = subject.find('option').map(it => it.text())
      const passedInTitles = options.map(it => it.text)

      expect(allTitles).toEqual(['Select One', ...passedInTitles])
    })

    test('each option has the correct value', () => {
      const subject = Shallow(<GenericDropdown options={options} />)
      const allTitles = subject.find('option').map(it => it.props().value)
      const passedInValues = options.map(it => it.value)

      expect(allTitles).toEqual(['', ...passedInValues])
    })

    test('the first option is disabled', () => {
      const subject = Shallow(<GenericDropdown options={options} />)

      expect(subject.find('option').first().props().disabled).toEqual(true)
    })
  })

  describe('value', () => {
    test('sets the value when created with value prop', () => {
      const subject = Shallow(<GenericDropdown options={options} value={options[0].value} />)

      expect(subject.find('.dropdown').dive().props().value).toEqual(options[0].value)
    })

    test('defaults to empty value when none is set', () => {
      const subject = Shallow(<GenericDropdown options={options} />)

      expect(subject.find('.dropdown').dive().props().value).toEqual('')
    })

    test('invokes on change when value is changed', () => {
      const fakeOnChangeFn = jest.fn()
      const subject = Shallow(<GenericDropdown options={options} onChange={fakeOnChangeFn} />)
      subject.find('.dropdown').simulate('change', { target: { value: options[0].value } })

      expect(fakeOnChangeFn).toHaveBeenCalledWith(options[0].value)
    })
  })
})
