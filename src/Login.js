import React, {useState,useEffect} from 'react';
import './CSS-Files/Home.css';
import './CSS-Files/Login.css';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';


const Login = () => {

  const navigate = useNavigate();
  const[email,setEmail]= useState('')
  const[password,setPassword]=useState('')

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/');
    }
})
const handleLogin =async ()=>{
  let result = await fetch("http://localhost:8000/login",
    {
      method:"POST",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
  result = await result.json();
  if(result.name){
    localStorage.setItem("user",JSON.stringify(result));
    toast("Login Successful! 😊");
    navigate("/");
  }
  else{
    toast("Invalid username or password. Please sign up! ");
  }
}

  return (
  <>
    <a href="https://wa.me/918102774475"><img src="/Briztech-Final-Project/images/chatbot.gif" className="chat-gif" alt="chatbot"/></a>

    <div className="login-outer">
    
    <img src="/Briztech-Final-Project/images/backg2.jpg" alt="background" className="login-bg"/>

    <div className="login-inner">

        <Link to={"/"}><button className="close" id="login-close">X</button></Link>

        <h1>User Login</h1><br/>
    
        <input type="email" value= {email} onChange={(e)=>{setEmail(e.target.value)}} className="user" placeholder="Email" required/><i className="fas fa-user"></i>
        <br/>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="password" placeholder="Password" required/><i className="fas fa-lock"></i>
        <p className="drop"></p><br/>

        <button className="login-btn" onClick={handleLogin}>Login</button><br/>
       
        <p className="forget">Forgot Password? <a href>Click Here</a></p><br/>

        <Link to={"/signup"}> <p className="Create" id="sign-page">Create Account</p></Link>

        <ToastContainer className={"toast"}/>

    </div>

   </div>
   </>
  );
};

export default Login;