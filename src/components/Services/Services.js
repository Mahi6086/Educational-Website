import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./code2.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div>
                <h1 className="text-center mt-5 courses-title mb-0">Our Courses</h1>
                <div className="dash-cu"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5 services-container">
            
            {
                services.map(service => <Service
                key={service.title}
                service={service}
                ></Service>)
            }
            
        </div>
        
        </div>
    );
};

export default Services;