import React from 'react'
import Builder from './builder'
import Store from "./app/redux/index"
import {Provider} from 'redux-zero/react'
import {BrowserRouter} from 'react-router-dom'

export default () => (
	<Provider store={Store}>
		<BrowserRouter>
			<Builder/>
		</BrowserRouter>
	</Provider>
)
