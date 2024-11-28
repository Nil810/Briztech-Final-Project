import React, {useState,useEffect} from 'react';
import './CSS-Files/Login.css';
import {useNavigate,Link} from "react-router-dom";
import './CSS-Files/Home.css';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  
  const navigate = useNavigate();
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
          navigate('/');
      }
  })

  const submit = async ()=>{
    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    let result =await fetch("http://localhost:8000/signup",
      {
        method: "POST",
        body: JSON.stringify({name,email,password}),
        headers:{"Content-Type":"application/json"}
      })
      result = await result.json();
      
      if (result.error) {
        toast.error(result.error);
      } else {
        // localStorage.setItem("user", JSON.stringify(result));
        toast.success("Registration Successful!");
        navigate('/login');
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
        
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" required/>
        <i className="fas fa-user"></i><br/>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" required/>
        <i className="fas fa-envelope"></i><br/>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" required/>
        <i className="fas fa-lock"></i><br/>

        <button className="login-btn" onClick={submit}>Sign Up</button><br/>

        <p className="forget">Already Registered? <Link>Click Here</Link></p>
        <p className="Create" id="log-page"><Link to={"/login"}>Login</Link></p>
        
        <ToastContainer className={"toast"}/>

      </div>

  </div>

   </>
  );
};

export default SignUp;
