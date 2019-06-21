import React from 'react'
import {shallow, ReactWrapper} from 'enzyme'
import {Row, Column} from 'heroic/components/layout/grid'

describe('Heroic Layout - Row', () => {

	it('Will return right className and children', () => {
		const component: ReactWrapper = shallow((
			<Row>
				<p>Test</p>
			</Row>
		))
		expect(component.find('.flex-row').length).toEqual(1)
		expect(component.find('p').text()).toBe('Test')
	})

})

describe('Heroic Layout - Column', () => {

	it('Will return right className with dynamic sizes and children', () => {
		const component: ReactWrapper = shallow((
			<Column size={1}>
				<p>Test</p>
			</Column>
		))
		expect(component.find('.flex-column').length).toEqual(1)
		expect(component.find('.flex-1').length).toEqual(1)
		expect(component.find('p').text()).toBe('Test')
	})

})
