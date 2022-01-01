import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "./Banner/Banner";
import HomeFeatures from "./HomeFeatures/HomeFeatures";
import HomePrice from "./HomePrice/HomePrice";
import HomeStatistic from "./HomeStatistic/HomeStatistic";

const Home = () => {
	return (
		<>
			<Header />
			<Banner></Banner>
			<HomeFeatures></HomeFeatures>
			<HomeStatistic></HomeStatistic>
			<HomePrice></HomePrice>
			
			<Footer />
		</>
	);
};

export default Home;
