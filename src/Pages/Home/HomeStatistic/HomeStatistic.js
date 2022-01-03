import React from "react";
import "./HomeStatistic.css";

const HomeStatistic = () => {
	return (
		<>
			<div className="">
				<h1 className="statistics mt-5 mb-5 text-center">Our Reaches</h1>

				<div className="row">
					<div className="images col-sm-12 col-lg-3">
						<span className="icon"></span>
						<h3 className="text-statistics text-center">Lorem, ipsum.</h3>
						<p className="text-center fw-light">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Suscipit, quam.{" "}
						</p>
					</div>
					<div className=" images col-sm-12 col-lg-3">
						<span className="icon"></span>
						<h3 className="text-statistics text-center">Lorem, ipsum.</h3>
						<p className="text-center fw-light">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Excepturi, dolorem.
						</p>
					</div>
					<div className="images col-sm-12 col-lg-3">
						<span className="icon"></span>
						<h3 className="text-statistics text-center">Lorem, ipsum.</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
							libero.
						</p>
					</div>
					<div className="images col-sm-12 col-lg-3">
						<span className="icon"></span>
						<h3 className="text-statistics text-center">Lorem, ipsum.</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis, fugit.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeStatistic;
