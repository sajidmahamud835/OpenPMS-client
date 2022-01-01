import React from "react";

const Header = () => {
	return (
		<>
			<div className="bg-warning">
				<div className="container">
					<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
						<a
							href="/"
							className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none fs-5"
						>
							LOGO
						</a>

						<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
							<li>
								<a href="/" className="nav-link px-2 link-dark">
									Home
								</a>
							</li>
							<li>
								<a href="/" className="nav-link px-2 link-dark">
									Features
								</a>
							</li>
							<li>
								<a href="/" className="nav-link px-2 link-dark">
									Pricing
								</a>
							</li>
							<li>
								<a href="/" className="nav-link px-2 link-dark">
									FAQs
								</a>
							</li>
							<li>
								<a href="/" className="nav-link px-2 link-dark">
									About
								</a>
							</li>
						</ul>

						<div className="col-md-3 text-end">
							<button type="button" className="btn btn-outline-primary me-2">
								Login
							</button>
							<button type="button" className="btn btn-primary">
								Sign-up
							</button>
						</div>
					</header>
				</div>
			</div>
		</>
	);
};

export default Header;
