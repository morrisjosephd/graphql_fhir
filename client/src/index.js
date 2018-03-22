import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import webFont from 'webfontloader'
import 'normalize.css'
import './styles/styles.css'
import App from './components/App'
import Store from './store/store'

webFont.load({
  google: {
    families: ['Armata:300,400,600,700,800', 'sans-serif']
  }
})

const rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={Store.initialize()}>
    <App />
  </Provider>,
  rootElement
)
