import React from "react";

export default (props) => {
	return (
		(
			<div className="heroic-guest flex">
				<div className="heroic-guest-login flex flex-expand justify-center align-center login-left">
					<span/>
					<props.route.component/>
				</div>
				<div className="flex flex-8 justify-center align-center login-right">
					<div className="right-inner">
						<h6>0 Online</h6>
						<h2>Latest News</h2>
						<div className="flex flex-row flex-wrap">
							<div className="flex flex-6 has-margin">
								<div className="article">
									<img alt="index" src="/assets/img/news/lpromo_bundebazzaretahouseaugust2017_thumb.png"/>
									<h3>Creativity Rocks</h3>
									<p>Build the rooms of your dreams without limits</p>
								</div>
							</div>
							<div className="flex flex-6 has-margin">
								<div className="article">
									<img alt="index" src="/assets/img/news/lpromo_2016doublecredits_thumb.png"/>
									<h3>Become Rich</h3>
									<p>All the credits you could ever wish for</p>
								</div>
							</div>
							<div className="flex flex-6 has-margin">
								<div className="article">
									<img alt="index" src="/assets/img/news/lpromo_alice-1_thumb.png"/>
									<h3>Get Weird</h3>
									<p>Reveal your true colors and just have fun!</p>
								</div>
							</div>
							<div className="flex flex-6 has-margin">
								<div className="article">
									<img alt="index" src="/assets/img/news/lpromo_4thdaystoryjuly2017_thumb.png"/>
									<h3>Make Friends</h3>
									<p>Meet new people and conquer the world!</p>
								</div>
							</div>
						</div>
						<div className="flex flex-row has-big-margin">
							<div className="jumbotron flex flex-column flex-7">
								<h2>About Our Hotel</h2>
								<p>We are a hotel dedicated to providing a safe, fast and fun place for you to play with your friends,
									get creative and explore!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	)
}
