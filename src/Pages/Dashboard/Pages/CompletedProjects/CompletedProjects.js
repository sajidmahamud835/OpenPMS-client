import React from "react";

const CompletedProjects = () => {
	const CompletedTableData = [
		{
			idNo: "01",
			name: "Data no will be 01",
			date: "25 march, 2021",
			status: "completed",
			assignTo: "Developer Name",
			user: "johnwick@gmail.com",
		},
		{
			idNo: "02",
			name: "Data no will be 02",
			date: "26 march, 2021",
			status: "completed",
			assignTo: "Developer Name",
			user: "johnwick@gmail.com",
		},
		{
			idNo: "03",
			name: "Data no will be 03",
			date: "27 march, 2021",
			status: "completed",
			assignTo: "Developer Name",
			user: "johnwick@gmail.com",
		},
		{
			idNo: "04",
			name: "Data no will be 04",
			date: "28 march, 2021",
			status: "completed",
			assignTo: "Developer Name",
			user: "johnwick@gmail.com",
		},
		{
			idNo: "05",
			name: "Data no will be 05",
			date: "29 march, 2021",
			status: "completed",
			assignTo: "Developer Name",
			user: "johnwick@gmail.com",
		},
	];

	return (
		<>
			<div>
				<div>
					<h1 className="fs-2">Completed projects</h1>
				</div>
				<div className="table-responsive mt-5">
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">#No</th>
								<th scope="col">Name of the project</th>
								<th scope="col">Date</th>
								<th scope="col">Assign To</th>
								<th scope="col">Status</th>
								<th scope="col">User email</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{CompletedTableData.map((tableData, index) => (
								<tr key={index}>
									<th className="pt-3 pb-0" scope="row">
										{tableData.idNo}
									</th>
									<td className="pt-3 pb-0">{tableData.name}</td>
									<td className="pt-3 pb-0">{tableData.date}</td>
									<td className="pt-3 pb-0">{tableData.assignTo}</td>
									<td className="pt-3 pb-0">
										<span className="border border-success text-success py-1 px-2 rounded">
											{tableData.status}
										</span>
									</td>
									<td className="pt-3 pb-0">{tableData.user}</td>
									<td>
										<button className="btn btn-outline-success me-2">
											<i class="fas fa-pen"></i>
										</button>
										<button className="btn btn-outline-danger">
											<i class="fas fa-trash"></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div
					className="btn-toolbar mt-5"
					role="toolbar"
					aria-label="Toolbar with button groups"
				>
					<div className="btn-group me-2" role="group" aria-label="First group">
						<button type="button" className="btn btn-danger">
							1
						</button>
						<button type="button" className="btn btn-outline-danger">
							2
						</button>
						<button type="button" className="btn btn-outline-danger">
							3
						</button>
						<button type="button" className="btn btn-outline-danger">
							4
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CompletedProjects;
