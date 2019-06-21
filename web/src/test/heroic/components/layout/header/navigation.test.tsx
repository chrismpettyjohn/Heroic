import React from 'react'
import Routes from 'heroic/app/navigation'
import {mount, ReactWrapper} from 'enzyme'
import {MemoryRouter,Route} from 'react-router-dom'
import Navigation from 'heroic/components/layout/header/navigation'

describe('Heroic Layout - Navigaton', () => {

    const component: ReactWrapper = mount((
        <MemoryRouter initialEntries={['/me']}>
            <Route component={props => <Navigation group="home" {...props}/>} path="/me"/>
        </MemoryRouter>
    ))

    it('Will return a link for each parent link', () => {
        const main: ReactWrapper = component.find('.top-container').find('ul')
        expect(main.find('li').length).toEqual(Routes.length)
    })

    it('Will return the right sub navigation links based on group', () => {
        const secondary: ReactWrapper = component.find('.bottom-container').find('ul')
        const routes = Routes.find(parent => parent.group === 'home')
        
        if (routes) {
            expect(secondary.find('li').length).toEqual(routes.children.length)
        }
        else {
            fail()
        }
    })

    it('Will return an active link when matched', () => {
        const secondary: ReactWrapper = component.find('.bottom-container').find('ul')
        expect(secondary.find('.active').length).toEqual(1)
        expect(secondary.find('.active').text()).toBe('Home')
    })

})