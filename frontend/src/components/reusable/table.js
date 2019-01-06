import React from 'react'
import { Link } from 'react-router-dom'

class Table extends React.Component {

	render () {
		const { columns, data } = this.props
		return (
			<table className="table m-table table-striped table-bordered">
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
								if (column.type !== 'actions') {
									return <td key={n}>{row[column.type]}</td>
								}
								else {
									return (
										<td key={n}>
											{(column.actions.map((button, k) => {
												return (
													<Link className={`m-portlet__nav-link btn m-btn m-btn--hover-${button.class} m-btn--icon m-btn--icon-only m-btn--pill`} key={k} to={button.link}>
														<i className={`fal fa-${button.icon}`}/>
													</Link>
												)
											}))}
										</td>
									)
								}
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