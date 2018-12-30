import React from 'react'
import Portlet from 'components/reusable/portlet'


class Dashboard extends React.Component {

	render() {
		return (
			<Portlet border={false} title="Hotel Overview">
				<div className="row m-row--no-padding m-row--col-separator-xl">
					<div className="col-xl-4">
						<div className="m-widget14">
							<div className="m-widget14__header m--margin-bottom-30">
								<h3 className="m-widget14__title">Daily Users</h3><span className="m-widget14__desc">Average daily users over past week</span>
							</div>
						</div>
					</div>
					<div className="col-xl-4">
						<div className="m-widget14">
							<div className="m-widget14__header">
								<h3 className="m-widget14__title">Profit Share</h3><span className="m-widget14__desc">Breakdown on purchase types</span>
							</div>
						</div>
					</div>
					<div className="col-xl-4">
						<div className="m-widget1">
							<div className="m-widget1__item">
								<div className="row m-row--no-padding align-items-center">
									<div className="col">
										<h3 className="m-widget1__title">Registered Users</h3>
										<span className="m-widget1__desc">Compared to last week</span>
									</div>
									<div className="col m--align-right">
										<span className="m-widget1__number m--font-focus">+24%</span>
									</div>
								</div>
							</div>
							<div className="m-widget1__item">
								<div className="row m-row--no-padding align-items-center">
									<div className="col">
										<h3 className="m-widget1__title">Online Time</h3><span
										className="m-widget1__desc">AVG time spent in game</span>
									</div>
									<div className="col m--align-right">
										<span className="m-widget1__number m--font-accent">+20m</span>
									</div>
								</div>
							</div>
							<div className="m-widget1__item">
								<div className="row m-row--no-padding align-items-center">
									<div className="col">
										<h3 className="m-widget1__title">Downtime</h3><span
										className="m-widget1__desc">Time with 0 activity</span>
									</div>
									<div className="col m--align-right">
										<span className="m-widget1__number m--font-danger">+11h</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Portlet>
		)
	}
}

export default Dashboard