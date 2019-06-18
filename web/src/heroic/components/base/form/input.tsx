import React from 'react'

interface Interface {
	column: string,
	disabled?: boolean,
	type: string,
	value: string,
	onChange: (key: string, value: string) => void
}

export default ({ column, disabled, type, value, onChange }: Interface) => (
	<div className="form-group">
		<input
			className="form-control"
			type={type}
			value={value}
			onChange={e => onChange(column, e.target.value)}
		/>
		{
			disabled
				? <div className="invalid-feedback">Invalid Field</div>
				: null
		}
	</div>
)
