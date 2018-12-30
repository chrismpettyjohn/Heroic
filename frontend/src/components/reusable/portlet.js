import React from 'react'

class Portlet extends React.Component {

	componentDidMount () {
		let className = 'm-portlet '
		const { background, border, skin } = this.props

		if (background) className += `m--bg-${background} `
		if (!border) className += 'm-portlet--bordered-semi '

		className += `m-portlet--skin-${skin} `

		this.className = className
	}

	render() {
		const { className } = this
		const { children, title } = this.props

		return (
			<div className={className}>
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

Portlet.defaultProps = {
	background: false,
	border: true,
	skin: 'light'
}

export default Portlet