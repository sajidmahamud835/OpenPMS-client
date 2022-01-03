import React from 'react';

import member1 from "../../images/About _us/team-img1.jpg"
import member2 from "../../images/About _us/team-img2.jpg"
import member3 from "../../images/About _us/team-img3.jpg"
import member4 from "../../images/About _us/team-img4.jpg"

const Team = () => {
    const members=[
		{
			"img":member1,
			"name":"Omar",
			"position":"Founder"
		},
		{
			"img":member2,
			"name":"Anika",
			"position":"Manager"
		},
		{
			"img":member3,
			"name":"Sajid",
			"position":"Team Leader"
		},
		{
			"img":member4,
			"name":"Sohan",
			"position":"Founder"
		}
	]
    return (
        <div className="px-5 my-5">
					  <div className="teamSection my-2">
					      <h2 className="team">Team Member</h2>
					  </div>
					  <hr />

					  <div className="row my-5 mx-0 px-0 container justify-content-center">
						  {
							  members.map(member=> <div className="col-12 col-md-4 mt-3 ">
							  <div className="shadow h-100 rounded teamcard   ">
								<div className="memberspic">
								  <img src={member.img} className="card-img-top memberPic  " alt="..."/>
								</div>
								<div className="card-body teamcard p-0 ">
								  
									<div className="teamInfo">
										<h5 className="card-title px-3 pt-2 ">{member.name}</h5>
										<p className="card-text px-3 pb-2">{member.position}</p>
									</div>
								  
								</div>
								
							  </div>
							</div>)
						  }

					  </div>

				</div>
    );
};

export default Team;