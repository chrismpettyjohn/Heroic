import React from 'react'
import {mount, ReactWrapper} from 'enzyme'
import Router from 'heroic/components/core/router'
import {MemoryRouter, Route} from 'react-router-dom'

describe('Heroic Core - Router', () => {

	const component: ReactWrapper = mount((
		<MemoryRouter>
			<Router/>
		</MemoryRouter>
	))

	it('Will return null while querying routes', () => {
		expect(component.html()).toBe("")
	})

	it('Will return routes', async done => {
		await component
		expect(component.find(Route).length).toBeGreaterThan(0)
		done()
	})


})

