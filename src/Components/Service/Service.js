import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,img,description}=service
    return (
        <div className="service pb-5">
           
            <img className="w-75 pt-4 px-5 mx-4 my-4" src={img} alt="" />
            <h2 className="px-3 text-center">{name}</h2>
            <p className="px-5">{description}</p>
            <Link to={`/details/${id}`}>
            <button className="btn btn-primary px-5 rounded mx-5 me-5 mt-4 pe-4 w-50 ps-4">Details</button>
            </Link>
            
        </div>
    );
};

export default Service;