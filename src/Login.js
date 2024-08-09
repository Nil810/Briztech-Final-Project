import React, {useState} from 'react';
import './CSS-Files/Login.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import './CSS-Files/Home.css';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';


const Login = () => {

  const history = useNavigate();

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  
  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/login",{
          email,password
        
    })
        .then(res=>{
          if(res.data==="Already exist"){
            toast("Login Successful! 😊");
            history("/"); //Redirect to homepage
          }
         
          else if(res.data==="Not exist"){
  
            toast("Invalid username or password. Please sign up! ");
          }
        })

        .catch(e=>{
          toast("Invalid username or password! ");
          console.log(e);
        })

      }
    catch(e){
        console.log(e);
    }

  }


  return (
  <>
    <Header />
    <a href="https://wa.me/918102774475"><img src="/Briztech-Final-Project/images/chatbot.gif" className="chat-gif" alt="chatbot"/></a>

    <div className="login-outer">
    
    <img src="/Briztech-Final-Project/images/backg2.jpg" alt="background" className="login-bg"/>

    <div className="login-inner">

        <Link to={"/"}><button className="close" id="login-close">X</button></Link>

        <h1>User Login</h1><br/>

      
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="user" placeholder="Email" required/><i className="fas fa-user"></i>
        <br/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="password" placeholder="Password" required/><i className="fas fa-lock"></i>
        <p className="drop"></p><br/>

        <button className="login-btn" onClick={submit()}>Login</button><br/>
       

        <p className="forget">Forgot Password? <a href>Click Here</a></p><br/>

        <Link to={"/signup"}> <p className="Create" id="sign-page">Create Account</p></Link>

        <ToastContainer className={"toast"}/>

    </div>

   </div>
   </>
  );
};

export default Login;