import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Pricing.css"

const Pricing = () => {
    return (
        <>
        <Header></Header>
        <div className='container'>
            <div className='row px-0 mx-0'>
            <div className='col-12 col-md-4'>
                <div className='mt-5'>
                        
                        <div className='pricecard border p-4'>
                            <div>
                                <h4 className='text-center my-5'>Business Plus</h4>
                            </div>
                            <div className='d-flex justify-content-center'>
                               
                                <h1 className='text-primary'>$6</h1>
                                <span className='ms-1 fw-bolder'>USD</span>
                              
                            </div>
                            <p className='text-center'>/user/month</p>
                            <div className='text-center'>
                                <button className='btn btn-primary my-3'>Get Started</button>
                            </div>
                            <hr />
                            <div >
                            <table class="table">
                               
                                <tbody>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>Custom and secure business email</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>150 participant video meetings + recording</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>2 TB cloud storage per user</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>Security and management controls</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>Standard Support (paid upgrade to Enhanced Support)</small></td>
                                  </tr>
                                </tbody>
                                </table>
                            </div>


                        </div>
                </div>

                </div>
                <div className='col-12 col-md-4'>
                    <div className='mostpopulardiv'>
                        <div className='mostpopular'>
                            <h6 className='text-center p-2'>Most Popular</h6>
                        </div>
                        <div className=' pricecard border p-4'>
                            <div>
                                <h4 className='text-center my-5'>Business Standard</h4>
                            </div>
                            <div className='d-flex justify-content-center'>
                               
                                <h1 className='text-primary'>$12</h1>
                                <span className='ms-1 fw-bolder'>USD</span>
                              
                            </div>
                            <p className='text-center'>/user/month</p>
                            <div className='text-center'>
                                <button className='btn btn-primary my-3'>Get Started</button>
                            </div>
                            <hr />
                            <div >
                            <table class="table">
                               
                                <tbody>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>Custom and secure business email</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>150 participant video meetings + recording</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>2 TB cloud storage per user</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>Security and management controls</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>Standard Support (paid upgrade to Enhanced Support)</small></td>
                                  </tr>
                                </tbody>
                                </table>
                            </div>


                        </div>
                    </div>

                </div>
                <div className='col-12 col-md-4'>
                <div className='mt-5'>
                        
                        <div className='pricecard  border p-4'>
                            <div>
                                <h4 className='text-center my-5'>Business Plus</h4>
                            </div>
                            <div className='d-flex justify-content-center'>
                               
                                <h1 className='text-primary'>$18</h1>
                                <span className='ms-1 fw-bolder'>USD</span>
                              
                            </div>
                            <p className='text-center'>/user/month</p>
                            <div className='text-center'>
                                <button className='btn btn-primary my-3'>Get Started</button>
                            </div>
                            <hr />
                            <div >
                            <table class="table">
                               
                                <tbody>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>Custom and secure business email</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>150 participant video meetings + recording</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>2 TB cloud storage per user</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>Security and management controls</small></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><i class="fas fa-check text-primary"></i></th>
                                    <td><small>Standard Support (paid upgrade to Enhanced Support)</small></td>
                                  </tr>
                                </tbody>
                                </table>
                            </div>


                        </div>
                </div>

                </div>

            </div>

        </div>
        <Footer></Footer>
        </>
    );
};

export default Pricing;