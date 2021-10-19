import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {user,signInUsingGoogle,handleUserLogin,handleUserRegister,handleEmail,handlePassword,toggoleLogin,handleName,isLogin,handleRegister}=useAuth()
   const location=useLocation()
   const history=useHistory()
   const redirect=location.state?.from||'/service'
 const handleGoogleSign=()=>{
     signInUsingGoogle()
     .then(result=>{
         history.push(redirect)
     }
        )
 }
    

    return (
        <div className="mx-5 px-5 w-50">
           <form onSubmit={handleRegister}>
               <h3>Please {isLogin?'Login':'Register'}</h3>
               
  <div class="row mb-3">
    <label for="inputAddress" className=" col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
    <input onBlur={handleName} type="text" class="form-control"  placeholder="Name"/>
    </div>
  </div>
  <div className="row mb-3">
 <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
    <div class="form-check">
        <input onChange={toggoleLogin} class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Already Registerd?
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary px-4 ms-3">{isLogin?'Login':'Register'}</button>
  
</form>
<button  className="mx-2 px-4 pb-2 py-2 my-3 bg-warning" onClick={handleGoogleSign}>Google sign in</button>

            

        </div>
    );
};

export default Login;