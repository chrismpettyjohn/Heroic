import React from 'react'
import Footer from 'heroic/components/layout/footer';

export default (props) => {
	return (
		<div className="h-100">
			<div className="heroic-guest flex">
				<div className="heroic-guest-login flex flex-expand justify-center align-center login-left">
					<div className="left-inner">
						<props.route.component/>
					</div>
				</div>
				<div className="flex flex-8 justify-center align-center login-right">
					<div className="right-inner">
						<h4>0 Online</h4>
						<img alt="habbo room" src="http://i.imgur.com/Dzm3ZeE.png"/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
