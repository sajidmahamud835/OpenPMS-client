import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const NotFound = () => {
	return (
		<>
			<Header />
			<div className="container py-5 my-5">
				<h1>Something went wrong</h1>
				<br />
				<Link to="/" className="btn btn-danger">
					Go to home
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default NotFound;
