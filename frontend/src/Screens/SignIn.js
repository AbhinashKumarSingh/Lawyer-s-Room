import React, { useState } from 'react';
import {Link } from 'react-router-dom'
import Axios from 'axios'

function SignIn(){

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const SubmitHandler=async(e)=>{
        e.preventDefault();
        const data=await Axios.post('/api/client/signin',{email,password});
        console.log(data)
    }

    return (
        <>
          <div className='form'>
          <form onSubmit={SubmitHandler}>
          <div className="container">
          <div className='register'>
       <h2 >Sign-In</h2>
         <p>Please fill in this form to create an account.</p>
        </div>
        <ol>
        <li>
    <label for="email"><b>Email</b></label>
    <br></br>
    <input type="text" placeholder="Enter Email" name="email" id="email" required  onChange={(e)=>setEmail(e.target.value)}/>
        </li>
        
        <li>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={(e)=>setPassword(e.target.value)} />
        </li>
        
    </ol>
        

    <div className='button'>
    <button type="submit" className="registerbtn">Sign-In</button>
    </div>
    <p>For Lawyer SignIn Here   <Link to='/lawyersignin'>Lawyer Sign-In</Link></p>
    
        </div>
    </form>
      </div>
        </>
    )
}
export default SignIn