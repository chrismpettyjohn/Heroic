import React from 'react'
import {shallow, ReactWrapper} from 'enzyme'
import Card from 'heroic/components/base/card'

describe('Heroic Base Components - Card', () => {

	const mount: ReactWrapper = (props: any) => shallow(<Card {...props} />)

	it('Will return a header when prop is given', () => {
		const component = mount({ header: 'Testing' })
		expect(component.find('.header').text()).toBe('Testing')
	})

	it('Will return a subheader when prop is given', () => {
		const component: ReactWrapper = mount({ subheader: 'More Testing' })
		expect(component.find('.description').text()).toBe('More Testing')
	})

	it('Will render children', () => {
		const component: ReactWrapper = mount({ children: [<p>Test</p>]})
		expect(component.find('p').text()).toBe('Test')
	})

})
