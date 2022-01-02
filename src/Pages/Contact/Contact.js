import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () => {
	return (
		<>
			<Header />
			<div className="container my-5 py-5">
				
				<div className='container'>
					      <div className='text-center my-5'>
					         <h1 className='bedroomdesign d-inline'>Contact Us</h1>
					     </div>
						<div className='row mx-0 px-0'>
							<div className='col-12 col-md-6'>
								<form id="contactform" action="https://formsubmit.io/send/farukeomar@gmail.com" method="POST">
									<input type="text" class="form-control mb-2" id="exampleFormControlInput1" placeholder="name" name="name" />
									<input type="email" name="email" class="form-control mb-2" id="exampleFormControlInput1" placeholder="email"/>
									<textarea name="massage" id="" class="form-control mb-2" cols="30" rows="10"></textarea>
									
									<input name="_formsubmit_id" type="text" style={{display:"none"}}></input>
								<input className='btn btn-primary w-100'  type="submit" value="Send" />

								</form>
							</div>
							
							<div className='col-12 col-md-6'>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.244774502!2d91.93286059496677!3d21.45104335684565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2z4KaV4KaV4KeN4Ka44Kas4Ka-4Kac4Ka-4Kaw!5e0!3m2!1sbn!2sbd!4v1639146692996!5m2!1sbn!2sbd" title='omar' width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

							</div>

						</div>
            
        </div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
