import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="border-top">
				<div className="container">
					<footer className="py-5">
						<div className="row justify-content-between">
							<div className=" col-6 col-md-6 col-lg-2">
								<h5>Section</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											Home
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											Features
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											Pricing
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											FAQs
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											About
										</Link>
									</li>
								</ul>
							</div>

							<div className=" col-6 col-md-6 col-lg-2">
								<h5>Section</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											Home
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											Features
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											Pricing
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											FAQs
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											About
										</Link>
									</li>
								</ul>
							</div>

							<div className="mt-4 mt-lg-0 col-6 col-md-6 col-lg-2">
								<h5>Section</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											Home
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											Features
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											Pricing
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											FAQs
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link d-inline p-0 text-muted">
											About
										</Link>
									</li>
								</ul>
							</div>

							<div className="mt-4 mt-lg-0 col-12 col-md-12 col-lg-4 offset-0 offset-lg-1">
								<form>
									<h5>Subscribe to our newsletter</h5>
									<p>Monthly digest of whats new and exciting from us.</p>
									<div className="d-flex w-100 gap-2">
										<label htmlFor="newsletter1" className="visually-hidden">
											Email address
										</label>
										<input
											id="newsletter1"
											type="text"
											className="form-control"
											placeholder="Email address"
										/>
										<button className="btn btn-danger" type="button">
											Subscribe
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className="d-flex flex-column flex-lg-row justify-content-between pt-4 mt-4 border-top">
							<p>
								&copy; {new Date().getFullYear()} Company, Inc. All rights
								reserved.
							</p>
							<ul className="list-unstyled d-flex">
								<li className="ms-3">
									<Link className="link-dark" to="/">
										Twitter
									</Link>
								</li>
								<li className="ms-3">
									<Link className="link-dark" to="/">
										Instagram
									</Link>
								</li>
								<li className="ms-3">
									<Link className="link-dark" to="/">
										Facebook
									</Link>
								</li>
							</ul>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
};

export default Footer;
