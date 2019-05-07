import React from 'react'
import Store from 'app/redux'
import Builder from './builder'
import {Provider} from 'redux-zero/react'
import {BrowserRouter} from 'react-router-dom'

export default () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Builder/>
      </BrowserRouter>
    </Provider>
  )
}
