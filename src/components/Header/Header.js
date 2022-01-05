import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className="border-bottom mb-5">

			<nav className="container">
				<div className="navbar navbar-expand-lg navbar-light px-4">
					<NavLink className="navbar-brand fs-4 fw-bold text-danger" to="/">
						<i className="fas fa-project-diagram"></i> OpenPMS
					</NavLink>
					<button
						className="navbar-toggler border-danger px-2 py-1"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
							<li className="nav-item mt-3 mt-lg-0">
								<NavLink
									className="nav-link px-1 pms-nav-link mx-3"
									aria-current="page"
									to="/home"
									activeClassName="active-pms-link"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item mt-3 mt-lg-0">
								<NavLink
									className="nav-link px-1 pms-nav-link mx-3"
									to="/about"
									activeClassName="active-pms-link"
								>
									About
								</NavLink>
							</li>
							<li className="nav-item mt-3 mt-lg-0">
								<NavLink
									className="nav-link px-1 pms-nav-link mx-3"
									to="/pricing"
									activeClassName="active-pms-link"
								>
									Pricing
								</NavLink>
							</li>
							<li className="nav-item mt-3 mt-lg-0">
								<NavLink
									className="nav-link px-1 pms-nav-link mx-3"
									to="/faq"
									activeClassName="active-pms-link"
								>
									FAQs
								</NavLink>
							</li>
							<li className="nav-item mt-3 mt-lg-0">
								<NavLink
									className="nav-link px-1 pms-nav-link mx-3"
									to="/contact"
									activeClassName="active-pms-link"
								>
									Contact
								</NavLink>
							</li>
							<div className="ms-0 ms-lg-3 mt-3 mt-lg-0">
								<button className="btn btn-outline-danger pms-btn-outline">
									Get started
								</button>
							</div>
						</ul>
					</div>
				</div>

			</nav>

		</div>


	);
};

export default Header;
