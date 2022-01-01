import React from "react";
import Header from "../../components/Header/Header";
import Banner from "./Banner/Banner";
import HomeFeatures from "./HomeFeatures/HomeFeatures";

const Home = () => {
	return (
		<div>
			<Header />
			<Banner></Banner>
			<HomeFeatures></HomeFeatures>
			<h1>This is home page</h1>
    
		<div/>
	);
};

export default Home;
