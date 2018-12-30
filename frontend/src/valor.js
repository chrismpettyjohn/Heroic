import React from 'react'
import Store from 'app/state/store'
import Router from 'components/router'
import { Provider } from 'redux-zero/react'
import Header from 'components/layout/header'
import { BrowserRouter } from 'react-router-dom'

class Valor extends React.Component {

  componentDidMount () {
    console.clear()
  }

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <div className="m-grid m-grid--hor m-grid--root m-page">
            <Header/>
            <Router/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }

}

export default Valor