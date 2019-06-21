import React from 'react'
import App from 'heroic/app'
import {Provider} from 'redux-zero/react'
import {shallow, ReactWrapper } from 'enzyme'
import {BrowserRouter} from 'react-router-dom'

describe('Heroic Main', () => {

	const component: ReactWrapper = shallow(<App/>)

	it('Will have Redux and BrowserRouter', () => {
		expect(component.exists(Provider)).toBeTruthy()
		expect(component.exists(BrowserRouter)).toBeTruthy()
	})

})
