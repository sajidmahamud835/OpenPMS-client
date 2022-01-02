import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "./Banner/Banner";
import HomeFeatures from "./HomeFeatures/HomeFeatures";
import HomePrice from "./HomePrice/HomePrice";

const Home = () => {
	return (
		<>
			<Header />
			<Banner></Banner>
			<HomeFeatures></HomeFeatures>
			<HomePrice></HomePrice>
			<div className="container py-5">
				<h1>This is home page</h1>
				<p>This page is under construction.</p>
			</div>
			<Footer />
		</>
	);
};

export default Home;
