import React from 'react'
import ReactDOM from 'react-dom'

import Router from './routes/Router'

import { Provider } from 'react-redux'
import store from './store/configueStore'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  rootEl
)
