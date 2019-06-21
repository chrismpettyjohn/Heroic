import React from 'react'
import {shallow, ReactWrapper} from 'enzyme'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

describe('Heroic Layout - Container', () => {

	it('Will return children and have right className', () => {
		const component: ReactWrapper = shallow((
			<Container>
				<p>Test</p>
			</Container>
		))
		expect(component.find('.heroic-container').length).toEqual(1)
		expect(component.find('p').text()).toBe('Test')
	})

})

describe('Heroic Layout - ContainerContent', () => {

	it('Will return children and have right className', () => {
		const component: ReactWrapper = shallow((
			<ContainerContent>
				<p>Test</p>
			</ContainerContent>
		))
		expect(component.find('.container-content').length).toEqual(1)
		expect(component.find('p').text()).toBe('Test')
	})

})

describe('Heroic Layout - ContainerHeader', () => {

	it('Will return children and have right className', () => {
		const component: ReactWrapper = shallow((
			<ContainerHeader>
				<p>Test</p>
			</ContainerHeader>
		))
		expect(component.find('.container-header').length).toEqual(1)
		expect(component.find('p').text()).toBe('Test')
	})

})
