import React from 'react'
import {shallow, ReactWrapper} from 'enzyme'
import Alert from 'heroic/components/base/alert'

describe('Heroic Base - Alert', () => {

	it('Will have a dynamic classname and return children', () => {
		const component: ReactWrapper = shallow((
			<Alert color="danger">
				<p>Test</p>
			</Alert>
		))
		expect(component.find('.alert-danger').length).toEqual(1)
		expect(component.find('p').text()).toBe('Test')
	})

	it('Will return a h3 when header prop is given', () => {
		const component: ReactWrapper = shallow(<Alert color="danger" header="Test 1"/>)
		expect(component.find('h3').text()).toBe('Test 1')
	})

})
