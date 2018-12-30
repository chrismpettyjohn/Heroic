import React from 'react'
import Store from 'app/state/store'
import Router from 'components/router'
import { Provider } from 'redux-zero/react'
import Header from 'components/layout/header'
import { BrowserRouter } from 'react-router-dom'

class Valor extends React.Component {

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <div className="m-grid m-grid--hor m-grid--root m-page">
            <Header/>
            <div className="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop 	m-container m-container--responsive m-container--xxl m-page__container m-body m-body-margin">
              <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <Router/>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }

}

export default Valor