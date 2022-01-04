import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "PDF", "TXT", "HTML", "JS"];

const AddProject = () => {
	const [file, setFile] = useState(null);
	const handleChange = (file) => {
		setFile(file);
	};

	return (
		<>
			<div>
				<h1 className="fs-2 mb-5">Add a project</h1>
				<div>
					<div className="d-flex flex-md-row flex-column gap-0 gap-lg-5">
						<div className="my-3 w-25 add-product-input">
							<label htmlFor="formControlInput1" className="form-label">
								Project Name
							</label>
							<input
								type="email"
								className="form-control"
								id="formControlInput1"
								placeholder="Enter your project name..."
							/>
						</div>
						<div className="my-3 w-25 add-product-input">
							<label htmlFor="floatingTextarea2" className="form-label">
								Select your project type
							</label>
							<select
								className="form-select"
								aria-label="Default select example"
							>
								<option value="1">Web Design</option>
								<option value="2">Web Development</option>
								<option value="3">React App</option>
								<option value="4">Next JS</option>
							</select>
						</div>
					</div>
					<div>
						<div className="my-3 add-product-textarea">
							<label htmlFor="floatingTextarea2" className="form-label">
								Describe your requirements
							</label>
							<textarea
								className="form-control"
								placeholder="Describe here..."
								id="floatingTextarea2"
								style={{ height: "150px" }}
							></textarea>
						</div>
					</div>
					<div>
						<div className="my-4">
							<h6>Put other information file here</h6>
							<FileUploader
								handleChange={handleChange}
								name="file"
								types={fileTypes}
							/>
							<p className="my-2">
								{file ? `File name: ${file.name}` : "no files uploaded yet"}
							</p>
						</div>
					</div>
					<div>
						<div className="form-check my-3">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							/>
							<label className="form-check-label" for="flexCheckDefault">
								You agreed with our{" "}
								<a
									href="/dashboard"
									className="text-danger text-decoration-none"
								>
									terms{" "}
								</a>
								and{" "}
								<a
									href="/dashboard"
									className="text-danger text-decoration-none"
								>
									conditions
								</a>
							</label>
						</div>
						<button className="btn btn-danger">Submit</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddProject;
