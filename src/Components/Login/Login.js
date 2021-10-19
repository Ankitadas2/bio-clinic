import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {user,signInUsingGoogle,handleUserLogin,handleUserRegister}=useAuth()
     const location=useLocation()
     const history=useHistory()
     console.log("came from",location.state?.from)
    const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")
     const handleEmail=(e)=>{
         setEmail(e.target.value)
     }
     const handlePassword=(e)=>{
         setPassword(e.target.value)
     }
     const handleRegister=()=>{
         handleUserRegister(email,password)
         
        
         console.log(email,password)
     }
     const handleLogin=(e)=>{
         handleUserLogin(email,password)
         e.preventDefault()
     }
    return (
        <div className="set-log">
            <h2 className="pb-4 text-success fs-1">Log in please</h2>
            <div className="login">
            <input className="mb-4"  onChange={handleEmail} type="email"  placeholder="Email" id="" />
            <input className="mb-4" onChange={handlePassword} type="password"  placeholder="password" id="" /
            >
                <div className="btn-group">
            <button className="mx-3 mb-4 px-4 py-1 bg-success" onClick={handleLogin}>Login</button>
            <button className="mx-3 mb-4 px-4 py-1 bg-warning" onClick={handleRegister}>Register</button>
            </div>
            </div>
            
            <button  className="mx-5 px-4 pb-2 py-2" onClick={signInUsingGoogle}>Google sign in</button>

        </div>
    );
};

export default Login;