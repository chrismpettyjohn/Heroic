import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import {BuilderStandalone} from 'heroic/builder'
import {mount, ReactWrapper} from 'enzyme'
import {Router} from 'heroic/components/core'
import {Loading} from 'heroic/components/base'

describe('Main Builder', () => {

	const wrapper: ReactWrapper = session => mount((
		<MemoryRouter>
			<BuilderStandalone session={session} website={{ SITE_NAME: 'Test' }}/>
		</MemoryRouter>
	))

	it('Will render router if loaded', () => {
		const component = wrapper({ ready: true })
		expect(component.find(Router).length).toBe(1)
		expect(component.find(Loading).length).toBe(0)
	})

	it('Will not render router if in loading state', () => {
		const component = wrapper({ ready: false })
		expect(component.find(Router).length).toBe(0)
		expect(component.find(Loading).length).toBe(1)
	})

})
