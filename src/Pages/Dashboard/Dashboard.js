import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./Pages/Overview";
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from "./Pages/Reports";
import Team from "./Pages/Team";

const Dashboard = () => {
	return (
		<>
			<Router>
				<Sidebar />
				<Switch>
					<Route path="/dashboard/overview" exact>
						<Overview />
					</Route>
					<Route path="/dashboard/reports" exact>
						<Reports />
					</Route>
					<Route path="/dashboard/reports/reports1" exact>
						<ReportsOne />
					</Route>
					<Route path="/dashboard/reports/reports2" exact>
						<ReportsTwo />
					</Route>
					<Route path="/dashboard/reports/reports3" exact>
						<ReportsThree />
					</Route>
					<Route path="/dashboard/team" exact>
						<Team />
					</Route>
					{/* component={Overview}
					<Route path="/reports" exact component={Reports} />
					<Route path="/reports/reports1" exact component={ReportsOne} />
					<Route path="/reports/reports2" exact component={ReportsTwo} />
					<Route path="/reports/reports3" exact component={ReportsThree} />
					<Route path="/team" exact component={Team} /> */}
				</Switch>
			</Router>
		</>
	);
};

export default Dashboard;
