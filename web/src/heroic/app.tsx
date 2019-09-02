import React from 'react'
import Builder from './builder'
import Store from 'heroic/app/redux/index'
import {Provider} from 'redux-zero/react'
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default () => (
	<Provider store={Store}>
		<BrowserRouter>
			<ToastContainer/>
			<Builder/>
		</BrowserRouter>
	</Provider>
)
