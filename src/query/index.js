import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import * as serviceWorker from '../serviceWorker'

import App from './App'
import './index.css'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if ('production' === process.env.NODE_ENV) {
  serviceWorker.register()
} else {
  serviceWorker.unregister()
}