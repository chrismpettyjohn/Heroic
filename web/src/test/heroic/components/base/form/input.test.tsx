import React from 'react'
import {mount, ReactWrapper} from 'enzyme'
import Input from 'heroic/components/base/form/input'

describe('Heroic Components - Input', () => {

	it('Will have the right props', () => {
		const component: ReactWrapper = mount(<Input column="test" type="text" value="bob" onChange={() => null} />)
		expect(component.find('input').props.val()).toBe('bob')
		expect(component.find('input').type()).toBe('text')
	})

	it('Will call onChange', () => {
		const onChange = jest.fn()
		const component: ReactWrapper = mount(<Input column="test" type="text" value="bob" onChange={onChange} />)
		component.find('input').simulate('change', { target: { value: 'john' }})
		expect(onChange).toBeCalledTimes(1)
		expect(onChange).toBeCalledWith('test', 'john')
	})

	it('Will return disabled when true', () => {
		const component: ReactWrapper = mount(<Input column="test" type="text" value="bob" onChange={() => null} />)
		expect(component.find('.invalid-feedback')).toBeGreaterThan(0)
	})

})
