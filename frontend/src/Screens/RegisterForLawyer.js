import React, { useState } from 'react';
import {Link } from 'react-router-dom'
import Axios from 'axios'

function LawyerRegister(){

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [rePassword,setRePassword]=useState()
    const [mobileNo,setMobileNo]=useState()
    const [place,setPlace]=useState()
    const [court,setCourt]=useState()
    const [typeOfLawyer,setTypeOfLawyer]=useState()
    
    const submitHandler=async(e)=>{
        e.preventDefault()
        const {data}=await Axios.post("/api/lawyer/register",{name,email,mobileNo,place,court,typeOfLawyer,password,rePassword});
        console.log(data)
    }

    return (
        <>
          <div className='lawyerform'>
          <form onSubmit={submitHandler}>
          <div className="lawyercontainer">
          <div className='lawyerregister'>
       <h2 >Register Lawyer</h2>
         <p>Please fill in this form to create an account.</p>
        </div>
        <ol>
        <li>
    <label for="psw"><b>Name</b></label>
    <br></br>
    <input type="text" placeholder="Enter Name" name="name" id="name" required onChange={(e)=>setName(e.target.value)} />
        </li>
        <li>
    <label for="email"><b>Email</b></label>
    <br></br>
    <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={(e)=>setEmail(e.target.value)}/>
        </li>
        <li>
    <label for="psw"><b>Mobile No.</b></label>
    <input type="number" placeholder="Enter number" name="number" id="number" required onChange={(e)=>setMobileNo(e.target.value)}/>
        </li>
        <li>
    <label for="psw"><b>Place</b></label>
    <input type="place" placeholder="Enter city" name="place" id="place" required onChange={(e)=>setPlace(e.target.value)} />
        </li>
        <li>
    <label for="court"><b>Court's Lawyer</b></label>
    <select name="court" id="court" onChange={(e)=>setCourt(e.target.value)}>
  <option value="supremeCourt">Supreme Court</option>
  <option value="highCourt">High Court</option>
  <option value="civilCourt">Civil Court</option>
  
      </select>
        </li>
        <li>
    <label for="typesOfLayer"><b>Type Of Lawyer</b></label>
    <select name="typesOfLayer" id="typesOfLayer" onChange={(e)=>setTypeOfLawyer(e.target.value)}>
  <option value="Intellectual Property Lawyer">Intellectual Property Lawyer</option>
  <option value="Public Interest Lawyer">Public Interest Lawyer</option>
  <option value="Tax Lawyer">Tax Lawyer</option>
  <option value="Criminal Lawyer">Criminal Lawyer</option>
  <option value="Family Lawyer">Family Lawyer</option>
  
      </select>
        </li>


        <li>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={(e)=>setPassword(e.target.value)}/>
        </li>
        <li>
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required onChange={(e)=>setRePassword(e.target.value)}/>
    </li>
    </ol>
        
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <div className='button'>
    <button type="submit" className="registerbtn">Register</button>
    </div>
    <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
    </form>
      </div>
        </>
    )
}
export default LawyerRegister