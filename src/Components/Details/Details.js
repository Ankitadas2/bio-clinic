import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId}=useParams()
    const [user,setUser]=useState([]);
    const [single,setSingle]=useState([])
    
    useEffect(()=>{
        fetch('/info.json')
         .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
  useEffect(()=>{
    const foundUse=user.find(service=>service.id ==serviceId)

    setSingle(foundUse)
  },[user])
    
   return (
        <div className="container">
           <div className="mx-5 px-5 mt-5 pb-5">
           <img src={single?.img} alt="" />
           <h1>{single?.name}</h1>
           <p>{single?.description}</p>
           </div>
        </div>
    );
};

export default Details;