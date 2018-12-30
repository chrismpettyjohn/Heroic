import React from 'react'

class Portlet extends React.Component {

	render() {
		const { children, title, type } = this.props

		return (
			<div className={`m-portlet m--bg-${type} m-portlet--bordered-semi m-portlet--skin-dark m-portlet--full-height`}>
				<div className="m-portlet__head">
					<div className="m-portlet__head-caption">
						<div className="m-portlet__head-title">
							<h3 className="m-portlet__head-text">{title}</h3>
						</div>
					</div>
				</div>
				<div className="m-portlet__body">
					{children}
				</div>
			</div>
	)
	}

	}

	export default Portlet