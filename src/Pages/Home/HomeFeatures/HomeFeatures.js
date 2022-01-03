import React from 'react';
import './HomeFeatures.css'

const HomeFeatures = () => {
    return (
        <div>

            <h1 className="text-center mb-5 mt-5">Top Feautres</h1>
             <div className="service-container">

{/* sales part  */}

<div className="service sales">
    <i className="fas fa-project-diagram service-icon-design"></i>
    <h3 className="service-title">Project Management</h3>
    <p className="service-desc">We believe in providing  high quality project at an affordable price.</p>
    <button className="sales-btn">Project</button>
</div>

{/* rentals part  */}

<div className="service rentals">
    <i className="fas fa-comments service-icon-design"></i>
    <h3 className="service-title">Live Chat</h3>
    <p className="service-desc">LiveChat boosts efficiency of your online operations</p>
    <button className="rentals-btn">Chat</button>
</div>

{/* service part  */}

<div className="service services">
    <i className="fas fa-wrench service-icon-design"></i>
    <h3 className="service-title"> Task Management</h3>
    <p className="service-desc">The only task tool you need for task management and lists</p>
    <button className="services-btn">Task</button>
</div>
<div className="service services">
    <i className="fas fa-handshake service-icon-design"></i>
    <h3 className="service-title">Support User</h3>
    <p className="service-desc">With OpenPMS Service Management, you can receive, track, manage, and resolve requests from team's customers</p>
    <button className="services-btn">Get Support</button>
</div>
</div>
        </div>
    );
};

export default HomeFeatures;