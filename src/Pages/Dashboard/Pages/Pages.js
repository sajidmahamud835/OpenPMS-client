import React from "react";
import Projects from "./Projects/Projects";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import MainDashboard from "./MainDashboard/MainDashboard";

const Pages = (props) => {
	const { pageName } = props;
	console.log(props);

	if (pageName === "Dashboard") {
		return <MainDashboard />;
	}
	if (pageName === "Projects") {
		return <Projects />;
	}
	if (pageName === "Add a task") {
		return <AddTask />;
	}
	if (pageName === "All Tasks") {
		return <Tasks />;
	}
	// if (pageName === "All Tasks") {
	// 	return <Tasks />;
	// }
	// if (pageName === "All Tasks") {
	// 	return <Tasks />;
	// }
	// if (pageName === "All Tasks") {
	// 	return <Tasks />;
	// }
	// if (pageName === "All Tasks") {
	// 	return <Tasks />;
	// }

	return (
		<>
			<h1>route: {pageName}</h1>
		</>
	);
};

export default Pages;
