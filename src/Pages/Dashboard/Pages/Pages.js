import React from "react";
import AddProject from "./AddProject/AddProject";
import AddTask from "./AddTask/AddTask";
import AddUsers from "./AddUsers/AddUsers";
import CompletedProjects from "./CompletedProjects/CompletedProjects";
import LiveChat from "./LiveChat/LiveChat";
import MainDashboard from "./MainDashboard/MainDashboard";
import MakeRole from "./MakeRole/MakeRole";
import Projects from "./Projects/Projects";
import Support from "./Support/Support";
import Tasks from "./Tasks/Tasks";
import Users from "./Users/Users";

const Pages = (props) => {
	const { pageName } = props;
	// console.log(props);

	if (pageName === "Dashboard") {
		return <MainDashboard />;
	}
	if (pageName === "Projects") {
		return <Projects />;
	}
	if (pageName === "Add a project") {
		return <AddProject />;
	}
	if (pageName === "Completed projects") {
		return <CompletedProjects />;
	}
	if (pageName === "All Tasks") {
		return <Tasks />;
	}
	if (pageName === "Add a task") {
		return <AddTask />;
	}
	if (pageName === "All Users") {
		return <Users />;
	}
	if (pageName === "Add users") {
		return <AddUsers />;
	}
	if (pageName === "Make role") {
		return <MakeRole />;
	}
	if (pageName === "Support") {
		return <Support />;
	}
	if (pageName === "Live Chat") {
		return <LiveChat />;
	}

	return (
		<>
			<h1>route: {pageName}</h1>
		</>
	);
};

export default Pages;
