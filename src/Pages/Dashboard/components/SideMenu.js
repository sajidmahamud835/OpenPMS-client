import React, { useEffect, useState } from "react";

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
	{
		name: "Dashboard",
		exact: true,
		to: "/dashboard",
		iconClassName: "fas fa-th-large",
	},
	{
		name: "Projects",
		exact: true,
		to: `/dashboard/all-projects`,
		iconClassName: "far fa-edit",
		subMenus: [
			{ name: "Add a project", to: "/dashboard/projects/Add-a-project" },
			{
				name: "Completed projects",
				to: "/dashboard/projects/completed-project",
			},
		],
	},
	{
		name: "All Tasks",
		exact: true,
		to: `/dashboard/all-task`,
		iconClassName: "fas fa-clipboard-list",
		subMenus: [
			{ name: "Add a task", to: "/dashboard/all-task/Add-a-tasks" },
			{ name: "Completed task", to: "/dashboard/all-task/completed-task" },
		],
	},
	{
		name: "All Users",
		exact: true,
		to: `/dashboard/users`,
		iconClassName: "fas fa-users",
		subMenus: [
			{ name: "Add users", to: "/dashboard/users/add-users" },
			{ name: "Make role", to: "/dashboard/users/make-role" },
		],
	},
	{ name: "Support", to: `/dashboard/support`, iconClassName: "fas fa-pen" },
	{
		name: "Live Chat",
		to: `/dashboard/live-chat`,
		iconClassName: "far fa-comments",
	},
];

const SideMenu = (props) => {
	const [inactive, setInactive] = useState(false);

	useEffect(() => {
		if (inactive) {
			removeActiveClassFromSubMenu();
		}

		props.onCollapse(inactive);
	}, [inactive]);

	const removeActiveClassFromSubMenu = () => {
		document.querySelectorAll(".sub-menu").forEach((el) => {
			el.classList.remove("active");
		});
	};

	useEffect(() => {
		let menuItems = document.querySelectorAll(".menu-item");
		menuItems.forEach((el) => {
			el.addEventListener("click", (e) => {
				const next = el.nextElementSibling;
				removeActiveClassFromSubMenu();
				menuItems.forEach((el) => el.classList.remove("active"));
				el.classList.toggle("active");
				if (next !== null) {
					next.classList.toggle("active");
				}
			});
		});
	}, []);

	return (
		<div className={`side-menu ${inactive ? "inactive" : ""}`}>
			<div className="top-section">
				<div className="logo">{/* <img src={logo} alt="webscript" /> */}</div>
				<div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
					{inactive ? (
						<i className="border p-1 fs-2 fas fa-bars"></i>
					) : (
						<i className="border p-1 fs-2 fas fa-bars"></i>
					)}
				</div>
			</div>

			<div className="search-controller">
				<button className="search-btn">
					<i className="fas fa-search"></i>
				</button>

				<input type="text" placeholder="search" />
			</div>

			<div className="divider"></div>

			<div className="main-menu">
				<ul>
					{menuItems.map((menuItem, index) => (
						<MenuItem
							key={menuItem.name}
							name={menuItem.name}
							exact={menuItem.exact}
							to={menuItem.to}
							subMenus={menuItem.subMenus || []}
							iconClassName={menuItem.iconClassName}
							onClick={(e) => {
								if (inactive) {
									setInactive(false);
								}
							}}
						/>
					))}

					{/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="fas fa-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
				</ul>
			</div>

			<div className="side-menu-footer">
				<div className="avatar">
					<img
						src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="user"
					/>
				</div>
				<div className="user-info">
					<h5>John Wick</h5>
					<p>johnwick@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
