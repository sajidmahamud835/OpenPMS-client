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
		to: "//dashboard",
		iconClassName: "fas fa-th-large",
	},
	{
		name: "Content",
		exact: true,
		to: `/content`,
		iconClassName: "fas fa-th-large",
		subMenus: [
			{ name: "Courses", to: "/dashboard/content/courses" },
			{ name: "Videos", to: "/dashboard/content/videos" },
		],
	},
	{ name: "Design", to: `/dashboard/design`, iconClassName: "fas fa-pen" },
	{
		name: "Content 2",
		exact: true,
		to: `/dashboard/content-2`,
		iconClassName: "fas fa-pen",
		subMenus: [
			{ name: "Courses", to: "/dashboard/content-2/courses" },
			{ name: "Videos", to: "/dashboard/content-2/videos" },
		],
	},
	{ name: "Design 2", to: `/dashboard/design-2`, iconClassName: "fas fa-pen" },
	{ name: "Design 3", to: `/dashboard/design-3`, iconClassName: "fas fa-pen" },
	{ name: "Design 4", to: `/dashboard/design-4`, iconClassName: "fas fa-pen" },
];

const SideMenu = (props) => {
	const [inactive, setInactive] = useState(false);

	useEffect(() => {
		if (inactive) {
			removeActiveClassFromSubMenu();
		}

		props.onCollapse(inactive);
	}, [inactive]);

	//just an improvment and it is not recorded in video :(
	const removeActiveClassFromSubMenu = () => {
		document.querySelectorAll(".sub-menu").forEach((el) => {
			el.classList.remove("active");
		});
	};

	/*just a little improvement over click function of menuItem
	Now no need to use expand state variable in MenuItem component
  */
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
					<i class="fas fa-search"></i>
				</button>

				<input type="text" placeholder="search" />
			</div>

			<div className="divider"></div>

			<div className="main-menu">
				<ul>
					{menuItems.map((menuItem, index) => (
						<MenuItem
							key={index}
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
				<div className="avatar">{/* <img src={user} alt="user" /> */}</div>
				<div className="user-info">
					<h5>John Wick</h5>
					<p>johnwick@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
