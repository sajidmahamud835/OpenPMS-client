import React from 'react';
import faqPic from "../../images/FAQ/FAQs.gif"

const FAQ = () => {


    return (
        <>

            <div className='my-5'>
                <div className='px-5'>
                    <div className='row align-content-center justify-content-around'>
                        <div className='col-12 col-md-6'>
                            <div class="accordion mt-5" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        I'm running an EOL version of an Atlassian product. Will I receive support for it?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Only if you are going to perform an upgrade. Once an Atlassian product reaches its EOL (End of Life), the support team will no longer provide assistance on questions, requests or problems until the product is upgraded to a supported version                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        My license has expired/I don't have license. Will I receive support?                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        No. The support engineers will always need a SEN number to provide assistance on the case (even if the license is an Evaluation). If your license has expired, please open a renewal request with the Sales Team. Once the renewal procedure is confirmed, you will already be eligible for support.                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        I need a developer license for a test instance. How do I get one?                                                 </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Every license (besides the Evaluation and Starter licenses) is eligible to generate a developer/test license. If you browse to your my.atlassian.com account, you will see the option to generate a developer license (which is completely free of additional costs).                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingfi">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefi" aria-expanded="true" aria-controls="collapsefi">
                                        I'm demanding a call from the support. Will I receive it?                                        </button>
                                    </h2>
                                    <div id="collapsefi" class="accordion-collapse collapse show" aria-labelledby="headingfi" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Inbound phone assistance is reserved for Premier/Priority customers. You can surely request an outbound phone call for further assistance, but please be sure that you have already provided everything which was request by the support team                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingfi">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefi" aria-expanded="true" aria-controls="collapsefi">
I have a development question. Where should I address it to?                                        </button>
                                    </h2>
                                    <div id="collapsefi" class="accordion-collapse collapse show" aria-labelledby="headingfi" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        offering, customers with these kind of questions should first look for a solution at our development resource site, Atlassian Developers. If you still have questions, you can post directly on Atlassian Community, where our whole community                                                                           </div>
                                    </div>
                                </div>
                               

                            </div>

                        </div>
                        <div className='col-12 col-md-6'>
                            <img src={faqPic} alt="" />

                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default FAQ;