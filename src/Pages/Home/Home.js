import React from "react";
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
			<h1>Coming soon</h1>
		</>
	);
};

export default Home;
