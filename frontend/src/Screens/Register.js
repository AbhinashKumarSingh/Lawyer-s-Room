import React, { useState } from 'react';
import {Link } from 'react-router-dom'
import Axios from 'axios'

function Register(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [rePassword,setRePassword]=useState()
    const [mobileNo,setMobileNo]=useState()
    

    const SubmitHandler=async(e)=>{
        e.preventDefault();
        const data=await Axios.post('/api/client/register',{name,email,password,mobileNo,rePassword});
        console.log(data)
    }

    return (
        <>
          <div className='form'>
          <form onSubmit={SubmitHandler}>
          <div className="container">
          <div className='register'>
       <h2 >Register</h2>
         <p>Please fill in this form to create an account.</p>
        </div>
        <ol>
        <li>
    <label htmlFor="name"><b>Name</b></label>
    <br></br>
    <input type="text" placeholder="Enter Name" name="name" id="name" onChange={(e)=>setName(e.target.value)}  />
        </li>
        <li>
    <label htmlFor="email"><b>Email</b></label>
    <br></br>
    <input type="text" placeholder="Enter Email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}  />
        </li>
        <li>
    <label htmlFor="number"><b>Mobile No.</b></label>
    <input type="number" placeholder="Enter number" name="number" id="number" onChange={(e)=>setMobileNo(e.target.value)}  />
        </li>
        <li>
    <label htmlFor="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}  />
        </li>
        <li>
    <label htmlFor="rePassword"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="rePassword" id="rePassword" onChange={(e)=>setRePassword(e.target.value)}  />
    </li>
    </ol>
        
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <div className='button'>
    <button type="submit" className="registerbtn">Register</button>
    </div>
    <p>For Lawyer Register Here  <Link to='/lawyerregister'>Lawyer Register</Link></p>
    <p>Already have an account? <a href="/signin">Sign in</a>.</p>
        </div>
    </form>
      </div>
        </>
    )
}
export default Register