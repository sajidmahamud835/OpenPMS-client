import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./About.css"

const About = () => {
	return (
		<>
			<Header />
			<div className="py-5 my-5">
				<div>
				    <h1 className="text-center fw-bolder about">About Us</h1>
				</div>
				<div>
					<h2 className="my-3 text-center">Welcome to <span className="text-danger">OpenPMS</span></h2>
				</div>
				
			</div>
			<Footer />
		</>
	);
};

export default About;
