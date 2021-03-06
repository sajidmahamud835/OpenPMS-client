import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideMenu, { menuItems } from "./components/SideMenu";
import "./Dashboard.css";
import Pages from "./Pages/Pages";

// const MainDashboard = () => <h1>Dashboard</h1>;
// const Content = () => <h1>Content</h1>;
// const Courses = () => <h1>Content/Courses</h1>;
// const Videos = () => <h1>Content/Videos</h1>;
// const Design = () => <h1>Design</h1>;
// const Content2 = () => <h1>Content2</h1>;
// const Courses2 = () => <h1>Content/Courses 2</h1>;
// const Videos2 = () => <h1>Content/Videos 2</h1>;
// const Design2 = () => <h1>Design 2</h1>;

function Dashboard() {
	const [inactive, setInactive] = useState(false);

	return (
		<div id="dashboard">
			<Router>
				<SideMenu
					onCollapse={(inactive) => {
						setInactive(inactive);
					}}
				/>

				<div className={`container ${inactive ? "inactive" : ""}`}>
					{menuItems.map((menu, index) => (
						<>
							<Route key={menu.name} exact={menu.exact} path={menu.to}>
								<Pages pageName={menu.name} />
							</Route>
							{menu.subMenus && menu.subMenus.length > 0
								? menu.subMenus.map((subMenu, i) => (
									<Route key={subMenu.name} path={subMenu.to}>
										<Pages pageName={subMenu.name} />
									</Route>
								))
								: null}
						</>
					))}

					{/* <Switch>
						<Route exact path={"/"}>
							<MainDashboard />
						</Route>
						<Route exact path={"/content"}>
							<Content />
						</Route>
						<Route path={"/content/courses"}>
							<Courses />
						</Route>
						<Route path={"/content/videos"}>
							<Videos />
						</Route>
						<Route path={"/design"}>
							<Design />
						</Route>
						<Route exact path={"/content-2"}>
							<Content2 />
						</Route>
						<Route path={"/content-2/courses"}>
							<Courses2 />
						</Route>
						<Route path={"/content-2/videos"}>
							<Videos2 />
						</Route>
						<Route path={"/design-2"}>
							<Design2 />
						</Route>
					</Switch> */}
				</div>
			</Router>
		</div>
	);
}

export default Dashboard;
