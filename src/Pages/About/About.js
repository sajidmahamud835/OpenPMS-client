import React from "react";

import "./About.css"
import picture from "../../images/About _us/About us page.gif"
import Team from "../../components/Team/Team";

const About = () => {
	return (
		<>

			<div className="container">
				<div>
					<h1 className="text-center fw-bolder about">About Us</h1>
				</div>

				<div className="px-4">
					<h2 className="my-3 text-center">
						Welcome to <span className="text-danger">OpenPMS</span>
					</h2>

					<p className="text-center text-muted">
						Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
						ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
						vulputate cursus a sit amet mauris.
					</p>

					<div className="row my-5 mx-0 px-0 align-items-center">
						<div className="col-12 col-md-6">
							<img src={picture} alt="" />
						</div>

						<div className="col-12 col-md-6">
							<h2>Our story</h2>
							<p>
								Proin gravida nibh vel velit auctor aliquet. Aenean
								sollicitudin, lorem quis bibendum auctor, nisi elit consequat
								ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
								nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
								velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
								non mauris.
							</p>
							<button className="btn btn-danger px-5 py-2 my-2">
								Hire Now
							</button>
						</div>
					</div>
				</div>

				<Team />

			</div>

		</>
	);
};

export default About;
