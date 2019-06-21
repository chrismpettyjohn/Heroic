import React from 'react'
import {shallow, ReactWrapper} from 'enzyme'
import SubHeader from 'heroic/components/layout/sub-header'

describe('Heroic Layout - SubHeader', () => {

	it('Will return right className and children', () => {
		const component: ReactWrapper = shallow((
            <SubHeader>
                <p>Test</p>
            </SubHeader>
		))
		expect(component.find('.container-header').length).toEqual(1)
		expect(component.find('p').text()).toBe('Test')
	})

})
