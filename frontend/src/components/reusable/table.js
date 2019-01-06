import React from 'react'

class Table extends React.Component {

	render () {
		const { columns, data } = this.props
		return (
			<table className="table m-table m-table--head-bg-success">
				<thead>
				<tr>
					{(columns.map((column, i) => {
						return <th key={i}>{column.text}</th>
					}))}
				</tr>
				</thead>
				<tbody>
				{(data.map((row, i) => {
					return (
						<tr key={i}>
							{(columns.map((column, n) => {
								return <td key={n}>{row[column.type]}</td>
							}))}
						</tr>
					)
				}))}
				</tbody>
			</table>
		)
	}

}

export default Table