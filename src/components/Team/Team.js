import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import member1 from "../../images/About _us/team-img1.jpg"
import member2 from "../../images/About _us/team-img2.jpg"
import member3 from "../../images/About _us/team-img3.jpg"
import member4 from "../../images/About _us/team-img4.jpg"

const Team = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
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
                      <Carousel 
                 
                            showDots={false}
                            infinite={true}
                            autoPlay={true}
                            arrows={false}
                            autoPlaySpeed={1000}
                            responsive={responsive}>
                           {
							  members.map(member=> <div className="col-12 col-md-4 mt-3 ">
							  <div className="shadow h-100 rounded teamcard   " style={{width:"350px",height:"334px"}}>
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
                        </Carousel>   
						 

					  </div>

				</div>
    );
};

export default Team;