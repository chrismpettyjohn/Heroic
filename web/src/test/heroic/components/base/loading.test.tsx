import React from 'react'
import {shallow, ReactWrapper} from 'enzyme'
import Loading from 'heroic/components/base/loading'

describe('Heroic Base - Loading', () => {

	const component: ReactWrapper = shallow(<Loading/>)

	it('Will return a loading message', () => {
		expect(component.find('h1').text()).toBe('Application is loading')
	})

})
