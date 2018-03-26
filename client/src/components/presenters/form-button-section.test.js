import FormButtonSection from './form-button-section'

describe('Form Button Section', () => {
  let subject, fakeClearFormFn, fakeSaveFn

  beforeEach(() => {
    fakeClearFormFn = jest.fn()
    fakeSaveFn = jest.fn()
    subject = Shallow(<FormButtonSection clearForm={fakeClearFormFn} save={fakeSaveFn} />)
  })

  test('calls the clear form function when clear button is clicked', () => {
    subject.find('.clear-button').simulate('click')
    expect(fakeClearFormFn).toHaveBeenCalled()
  })

  test('calls the save function when save button is clicked', () => {
    subject.find('.save-button').simulate('click')
    expect(fakeSaveFn).toHaveBeenCalled()
  })
})
