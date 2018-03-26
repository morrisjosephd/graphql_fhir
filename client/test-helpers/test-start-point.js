import react from 'react'
import { Provider } from 'react-redux'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DEFAULT_STATE from '../src/store/reducers/default-state'

configure({ adapter: new Adapter() })

window.shallow = shallow
window.mount = mount
window.React = react

window.mountSubjectWithState = (ReactComponent, state = {}) => {
  let dispatchSpy = jest.fn()
  let fullState = Object.assign({}, DEFAULT_STATE, state)

  let store = {
    getState: () => {
      return fullState
    },
    subscribe: () => { },
    dispatch: dispatchSpy
  }

  let subject = mount(
    <Provider store={store}>
      {ReactComponent}
    </Provider>
  )

  return {
    dispatchSpy,
    subject
  }
}
