import react from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

window.Shallow = shallow
window.Mount = mount
window.React = react
