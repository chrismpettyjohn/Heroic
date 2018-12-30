import React from 'react'
import Stateful from 'app/state/stateful'

class Subheader extends React.Component {

	render () {
		const route = this.props.route

		return (
			<div className="m-subheader">
				<div className="d-flex align-items-center">
					<div className="mr-auto">
						<h3 className="m-subheader__title">{route.title}</h3>
						<p>{route.about}</p>
					</div>
				</div>
			</div>
		)
	}

}

export default Stateful(Subheader)