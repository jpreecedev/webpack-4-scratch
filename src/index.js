import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'regenerator-runtime/runtime'

import { initStore } from './store'

import App from './components/App'

ReactDOM.render(
  <Provider store={initStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
