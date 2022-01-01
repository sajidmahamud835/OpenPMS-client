import React from 'react';
import './HomeFeatures.css'

const HomeFeatures = () => {
    return (
        <div>

            <h1 className="text-center mb-5 mt-5">Top Feautres</h1>
             <div className="service-container">

{/* sales part  */}

<div className="service sales">
    <i className="fas fa-hand-holding-usd service-icon-design"></i>
    <h3 className="service-title">Sales</h3>
    <p className="service-desc">We believe in providing our customers with a high quality product at an affordable price. We use only quality name brand products.</p>
    <button className="sales-btn">Sales</button>
</div>

{/* rentals part  */}

<div className="service rentals">
    <i className="fas fa-box-open service-icon-design"></i>
    <h3 className="service-title">Rentals</h3>
    <p className="service-desc">We know it isa not always economical to purchase new equipment, that's why we offer a variety of rental options with daily, weekly and monthly rates.</p>
    <button className="rentals-btn">Rentals</button>
</div>

{/* service part  */}

<div className="service services">
    <i className="fas fa-wrench service-icon-design"></i>
    <h3 className="service-title">Services</h3>
    <p className="service-desc">We're not just your average safety store! Our experts know what you're looking for and we can show you how to use it.</p>
    <button className="services-btn">Services</button>
</div>
<div className="service services">
    <i className="fas fa-wrench service-icon-design"></i>
    <h3 className="service-title">Services</h3>
    <p className="service-desc">We're not just your average safety store! Our experts know what you're looking for and we can show you how to use it.</p>
    <button className="services-btn">Services</button>
</div>
</div>
        </div>
    );
};

export default HomeFeatures;