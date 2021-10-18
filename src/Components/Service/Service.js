import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,img,description}=service||{}
    return (
        <div className="service pb-3">
           
            <img className="w-50 pt-4 px-4 py-3" src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`/details/${id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
            
        </div>
    );
};

export default Service;