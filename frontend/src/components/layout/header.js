import React from 'react'
import { withRouter } from 'react-router-dom'

class Header extends React.Component {

	shouldComponentUpdate(props) {
		return props.location.pathname !== this.props.location.pathname
	}

	render() {
		return (
			<header className="m-grid__item m-header" id="m_header">
				<div className="m-container m-container--fluid m-container--full-height">
					<div className="m-stack m-stack--ver m-stack--desktop">
						<div className="m-stack__item m-brand m-brand--skin-dark">
							<div className="m-stack m-stack--ver m-stack--general">
								<div className="m-stack__item m-stack__item--middle m-brand__logo">
									<h1 style={{ color: 'white' }}>Heroic</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}

}

export default withRouter(Header)