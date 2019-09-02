import React from 'react'
import { FormInput, FormInputProps } from './input'

interface FormGroupProps {
  disabled: boolean
  rows: FormInputProps[]
  loading: boolean
  onSubmit: () => void
}

export const FormGroup = (props: FormGroupProps) => {
  const { disabled, rows, onSubmit, loading } = props

  const handleSubmit = event => {
    event.preventDefault()
    return onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      {
        rows.map(row => <FormInput key={row.column} {...row} />)
      }
      <div className="form-group">
        <button className="btn btn-green w-100" disabled={disabled} type="submit">
          {
            !loading
            ? 'Submit'
            : <i className="fa fa-spinner fa-spin"/>
          }
        </button>
      </div>
    </form>
  )

}
