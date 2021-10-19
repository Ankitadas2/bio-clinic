import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices] =useState([])
    useEffect(()=>{
        fetch('./info.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div id="service">
           <h1 className="text-center text-success">Our Services</h1>
            <div className="service-container">
            
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
        </div>
       </div>
    );
};

export default Services;