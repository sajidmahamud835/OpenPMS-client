import React from "react";
import "./Contact.css";
const Contact = () => {
	return (
		<>
			<div className="container">
				<div className="container">
					<div className="text-center my-5">
						<h1 className="bedroomdesign d-inline">Contact Us</h1>
					</div>
					<div className="row mx-0 px-0">
						<div className="col-12 col-md-6">
							<form
								id="contactform"
								action="https://formsubmit.io/send/openpmsteam@gmail.com"
								method="POST"
							>
								<input
									type="text"
									className="form-control mb-2"
									id="exampleFormControlInput1"
									placeholder="Enter Your Name"
									name="name"
								/>
								<input
									type="email"
									name="email"
									className="form-control mb-2"
									id="exampleFormControlInput1"
									placeholder="Enter Your Email Address"
								/>
								<textarea
									name="massage"
									id=""
									className="form-control mb-2"
									cols="30"
									rows="10"
									placeholder="Write down your message here"
								></textarea>

								<input
									name="_formsubmit_id"
									type="text"
									style={{ display: "none" }}
								></input>
								<input
									className="btn btn-primary w-100"
									type="submit"
									value="Send"
								/>
							</form>
						</div>

						<div className="col-12 col-md-6">
							<div className="mapouter">
								<div className="gmap_canvas">
									<iframe
										title="contact-address"
										width="600"
										height="390"
										id="gmap_canvas"
										src="https://maps.google.com/maps?q=Dhaka&t=&z=7&ie=UTF8&iwloc=&output=embed"
										frameborder="0"
										scrolling="no"
										marginheight="0"
										marginwidth="0">
									</iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
