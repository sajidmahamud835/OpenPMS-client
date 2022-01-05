import React from "react";
import "./HomeStatistic.css";

const HomeStatistic = () => {
	return (
		<div className="container">
			<div className="">
				<h1 className="statistics mt-5 mb-5 text-center">Why Choose us?</h1>

				<div className="row">
					<div className="images col-sm-12 col-lg-3 text-center">
						<span className="icon fas fa-brain"></span>
						<h3 className="text-statistics text-center mt-3">A Plan for Success</h3>
						<p className="text-center fw-light">
							You want results. We have found that the best way to get them is with up front research – of your company, competitors, target market and customer psychographics.
						</p>
					</div>
					<div className=" images col-sm-12 col-lg-3 text-center">
						<span className="icon fab fa-creative-commons-share"></span>
						<h3 className="text-statistics text-center mt-3">Creativity</h3>
						<p className="text-center fw-light">
							We bring our diverse background of advertising, design, branding, public relations, research and strategic planning to work for your company
						</p>
					</div>
					<div className="images col-sm-12 col-lg-3 text-center">
						<span className="icon fas fa-hand-holding-usd"></span>
						<h3 className="text-statistics mt-3 text-center">Pricing</h3>
						<p className="text-center">
							Our prices are competitive and fair. There are no surprise bills. Any unexpected or additional expenses must be pre-approved by you.
						</p>
					</div>
					<div className="images col-sm-12 col-lg-3 text-center">
						<span className="icon fas fa-business-time"></span>
						<h3 className="text-statistics mt-3 text-center">Meeting Deadlines</h3>
						<p className="text-center">
							We have worked with select casinos and state agencies for many years. Their rule – if we miss a deadline, we’re out. Period. They have some of the tightest turnarounds in the business
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeStatistic;
