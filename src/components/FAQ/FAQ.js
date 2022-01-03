import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import faqPic from "../../images/FAQ/FAQs.gif";

const FAQ = () => {
	return (
		<>
			<div className="my-5">
				<div className="px-5">
					<div className="row align-content-center justify-content-around">
						<div className="col-12 col-md-6">
							<div className="accordion" id="accordionExample">
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingOne">
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											Accordion Item #1
										</button>
									</h2>
									<div
										id="collapseOne"
										className="accordion-collapse collapse show"
										aria-labelledby="headingOne"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<strong>This is the first item's accordion body.</strong>{" "}
											It is shown by default, until the collapse plugin adds the
											appropriate classes that we use to style each element.
											These classes control the overall appearance, as well as
											the showing and hiding via CSS transitions. You can modify
											any of this with custom CSS or overriding our default
											variables. It's also worth noting that just about any HTML
											can go within the <code>.accordion-body</code>, though the
											transition does limit overflow.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingTwo">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="false"
											aria-controls="collapseTwo"
										>
											Accordion Item #2
										</button>
									</h2>
									<div
										id="collapseTwo"
										className="accordion-collapse collapse"
										aria-labelledby="headingTwo"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<strong>This is the second item's accordion body.</strong>{" "}
											It is hidden by default, until the collapse plugin adds
											the appropriate classes that we use to style each element.
											These classes control the overall appearance, as well as
											the showing and hiding via CSS transitions. You can modify
											any of this with custom CSS or overriding our default
											variables. It's also worth noting that just about any HTML
											can go within the <code>.accordion-body</code>, though the
											transition does limit overflow.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingThree">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseThree"
											aria-expanded="false"
											aria-controls="collapseThree"
										>
											Accordion Item #3
										</button>
									</h2>
									<div
										id="collapseThree"
										className="accordion-collapse collapse"
										aria-labelledby="headingThree"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<strong>This is the third item's accordion body.</strong>{" "}
											It is hidden by default, until the collapse plugin adds
											the appropriate classes that we use to style each element.
											These classes control the overall appearance, as well as
											the showing and hiding via CSS transitions. You can modify
											any of this with custom CSS or overriding our default
											variables. It's also worth noting that just about any HTML
											can go within the <code>.accordion-body</code>, though the
											transition does limit overflow.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingf">
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapsef"
											aria-expanded="true"
											aria-controls="collapsef"
										>
											Accordion Item #4
										</button>
									</h2>
									<div
										id="collapsef"
										className="accordion-collapse collapse show"
										aria-labelledby="headingf"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<strong>This is the first item's accordion body.</strong>{" "}
											It is shown by default, until the collapse plugin adds the
											appropriate classes that we use to style each element.
											These classes control the overall appearance, as well as
											the showing and hiding via CSS transitions. You can modify
											any of this with custom CSS or overriding our default
											variables. It's also worth noting that just about any HTML
											can go within the <code>.accordion-body</code>, though the
											transition does limit overflow.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingfi">
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapsefi"
											aria-expanded="true"
											aria-controls="collapsefi"
										>
											Accordion Item #5
										</button>
									</h2>
									<div
										id="collapsefi"
										className="accordion-collapse collapse show"
										aria-labelledby="headingfi"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<strong>This is the first item's accordion body.</strong>{" "}
											It is shown by default, until the collapse plugin adds the
											appropriate classes that we use to style each element.
											These classes control the overall appearance, as well as
											the showing and hiding via CSS transitions. You can modify
											any of this with custom CSS or overriding our default
											variables. It's also worth noting that just about any HTML
											can go within the <code>.accordion-body</code>, though the
											transition does limit overflow.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingS">
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseS"
											aria-expanded="true"
											aria-controls="collapseS"
										>
											Accordion Item #6
										</button>
									</h2>
									<div
										id="collapseS"
										className="accordion-collapse collapse show"
										aria-labelledby="headingS"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<strong>This is the first item's accordion body.</strong>{" "}
											It is shown by default, until the collapse plugin adds the
											appropriate classes that we use to style each element.
											These classes control the overall appearance, as well as
											the showing and hiding via CSS transitions. You can modify
											any of this with custom CSS or overriding our default
											variables. It's also worth noting that just about any HTML
											can go within the <code>.accordion-body</code>, though the
											transition does limit overflow.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<img src={faqPic} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQ;
