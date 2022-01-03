import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./About.css"
import picture from "../../images/About _us/About us page.gif"
import member1 from "../../images/About _us/team-img1.jpg"
import member2 from "../../images/About _us/team-img2.jpg"
import member3 from "../../images/About _us/team-img3.jpg"
import member4 from "../../images/About _us/team-img4.jpg"

const About = () => {
	const members=[
		{
			"img":member1,
			"name":"Omar",
			"position":"Founder"
		},
		{
			"img":member2,
			"name":"Anika",
			"position":"Manager"
		},
		{
			"img":member3,
			"name":"Sajid",
			"position":"Team Leader"
		},
		{
			"img":member4,
			"name":"Sohan",
			"position":"Founder"
		}
	]
	return (
		<>
			<Header />
			<div className="py-5 my-5">
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

				<div className="px-5 my-5">
					  <div className="teamSection my-2">
					      <h2 className="team">Team Member</h2>
					  </div>
					  <hr />

					  <div className="row my-5 mx-0 px-0 container justify-content-center">
						  {
							  members.map(member=> <div className="col-12 col-md-4 mt-3 ">
							  <div className="shadow h-100 rounded teamcard   ">
								<div className="memberspic">
								  <img src={member.img} className="card-img-top memberPic  " alt="..."/>
								</div>
								<div className="card-body teamcard p-0 ">
								  
									<div className="teamInfo">
										<h5 className="card-title px-3 pt-2 ">{member.name}</h5>
										<p className="card-text px-3 pb-2">{member.position}</p>
									</div>
								  
								</div>
								
							  </div>
							</div>)
						  }

					  </div>

				</div>

			</div>
			<Footer />
		</>
	);
};

export default About;
