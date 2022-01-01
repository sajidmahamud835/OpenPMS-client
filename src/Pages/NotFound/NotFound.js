import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const NotFound = () => {
	return (
		<div>
			<Header />
			<h1>Something went wrong</h1>
            <Link to="/" className="btn btn-primary">Go to home</Link>
		</div>
	);
};

export default NotFound;
