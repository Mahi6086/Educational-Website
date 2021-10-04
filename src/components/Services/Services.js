import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
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
            <Banner></Banner>
            <div className="row row-cols-1 row-cols-md-3 g-4">
             <h1>i am services</h1>
            {
                services.map(service => <Service
                key={service.title}
                service={service}
                ></Service>)
            }
            
        </div>
         <Footer></Footer>
        </div>
    );
};

export default Services;