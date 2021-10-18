import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId}=useParams()
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('/info.json')
         .then(res=>res.json())
        .then(data=>setData(data[0]))
    },[])
   let ExactItem= data.filter(pd=>pd.id===serviceId);
   
    console.log(ExactItem[0])
    return (
        <div>
           <h2>{serviceId}</h2>
            <img src={ExactItem?.img} alt="" />
            <h3>Name: {ExactItem?.name}</h3>
            <p>{data?.description}</p>
        </div>
    );
};

export default Details;