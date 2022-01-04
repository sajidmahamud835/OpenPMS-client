import React from "react";
import FAQ from "../../components/FAQ/FAQ";
import Pricing from "../../components/Pricing/Pricing";
import Team from "../../components/Team/Team";
import Banner from "./Banner/Banner";
import HomeFeatures from "./HomeFeatures/HomeFeatures";
import HomePrice from "./HomePrice/HomePrice";
import HomeStatistic from "./HomeStatistic/HomeStatistic";

const Home = () => {
	return (
		<>

			<Banner></Banner>
			<Pricing></Pricing>
			<HomeFeatures></HomeFeatures>
			<HomeStatistic></HomeStatistic>
			<HomePrice></HomePrice>
			<FAQ></FAQ>
			<Team></Team>

		</>
	);
};

export default Home;
