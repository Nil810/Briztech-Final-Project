import React, {useState} from 'react';
import './CSS-Files/Login.css';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import './CSS-Files/Home.css';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  
  const history = useNavigate();
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/signup",{
          email,password
        })

        .then(res=>{
          if(res.data==="Already exist"){
            // history("/")
            toast("User already exist. Please login.");
          }
         
          else if(res.data==="Not exist"){
            history("/login")
          
          }
        })

        .catch(e=>{
          toast("Invalid username or password.");
          console.log(e);
        })

    }
    catch(e){
        console.log(e);
    }
  }

  return (
    <>
     <a href="https://wa.me/918102774475"><img src="/Briztech-Final-Project/images/chatbot.gif" className="chat-gif" alt="chat-gif"/></a>

    <div className="signup-outer">
    <img src="/Briztech-Final-Project/images/backg2.jpg" alt="background" className="login-bg"/>
      <div className="signup-inner">
     

        <Link to={"/"}><button className="close" id="signin-close">X</button></Link>
        <h1>User Sign Up</h1><br/>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="user" placeholder="Username" required/><i className="fas fa-user"></i><br/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder="Password" required/><i className="fas fa-lock"></i><br/>
        <input type="password" id="cnfrmpass" placeholder=" Confirm Your Password" required/><i className="fas fa-lock"></i>
        <p id="drop"></p><br/>
        <button className="login-btn" onClick={submit}>Sign Up</button><br/>
        <p className="forget">Already Registered? <Link>Click Here</Link></p>
        <p className="Create" id="log-page"><Link to={"/login"}>Login</Link></p>
        
        <ToastContainer className={"toast"}/>

      </div>

  </div>

   </>

  );
};

export default Signup;
