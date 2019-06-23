import React from 'react'

export default () => {
	const year = new Date().getFullYear()
	return (
		<div className="heroic-footer">
			<div className="footer-container">
				<span className="copyright">&copy; {year} LeChris</span>
				<div className="heroic-brand">
					<span className="framework">heroic</span>
					<span className="powered-by">powered by</span>
				</div>
			</div>
		</div>
	)

}
