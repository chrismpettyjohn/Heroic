import React from 'react'
import Table from 'components/reusable/table'
import Portlet from 'components/reusable/portlet'

class List extends React.Component {

	componentWillMount () {

		this.articles = {
			columns: [
				{
					type: 'id',
					text: 'id'
				},
				{
					type: 'title',
					text: 'Title'
				},
				{
					type: 'created_at',
					text: 'Created At'
				},
				{
					type: 'author',
					text: 'Posted By'
				}
			],
			data: [
				{
					id: 1,
					title: 'Example Article',
					created_at: '05 January 2019',
					author: 'Chris'
				}
			]

		}
	}

	render () {
		const { articles } = this
		return (
			<Portlet border={false} title="Latest Articles">
				<Table columns={articles.columns} data={articles.data}/>
			</Portlet>
		)
	}

}

export default List