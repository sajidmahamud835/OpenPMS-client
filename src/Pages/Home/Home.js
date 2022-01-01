import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
	return (
		<>
			<Header />
			<div className="container py-5">
				<h1>This is home page</h1>
			</div>
			<Footer />
		</>
	);
};

export default Home;
