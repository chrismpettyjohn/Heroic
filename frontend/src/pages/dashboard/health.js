import React from 'react'
import Portlet from 'components/reusable/portlet'

class Health extends React.Component {

	render () {
		return (
			<Portlet border={false} title="Server Health">
			</Portlet>
		)
	}

}

export default Health