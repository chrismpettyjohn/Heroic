import React from 'react'

export interface FormInputProps {
	column: string
	label: string
	disabled?: boolean
	type: string
	value: string
	onChange: (key: string, value: string) => void
}

export const FormInput = ({ column, disabled, type, value, onChange, label }: FormInputProps) => (
	<div className="form-group">
		<label>{label}</label>
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
