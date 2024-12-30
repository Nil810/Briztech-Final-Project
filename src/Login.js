import React, {useState,useEffect} from 'react';
import './CSS-Files/Home.css';
import './CSS-Files/Login.css';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';


const Login = () => {

  const navigate = useNavigate();
  const[email,setEmail]= useState('');
  const[password,setPassword]=useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/');
    }
})

const handleLogin = async (event) => {
  event.preventDefault();

  const isValid = handleError();

  if (!isValid) {
    return;
  }

  try {
    // let result = await fetch("http://localhost:8000/login", {
      let result = await fetch("https://your-herbs.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    result = await result.json();
    
    if(result) {
      localStorage.setItem("user", JSON.stringify(result));
      setTimeout(() => {
        toast.success("Login Successful! 😊");
      }, 1000);
      
      setTimeout(() => {
        toast(`Welcome ${result.name}!`);
      }, 2000);
      navigate("/");
    } else {
      toast.error("Invalid username or password!");
    }
  } catch(err) {
    toast.error("Login failed. Please try again.");
  }
}

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

const handleError = () => {
  let isValid = true;
  
  if (!email) {
    setEmailError('Email is required!');
    isValid = false;
  } else if (!validateEmail(email)) {
    setEmailError('Please enter a valid email address!');
    isValid = false;
  } else {
    setEmailError('');
  }

  if (!password) {
    setPasswordError('Password is required!');
    isValid = false;
  } else if (!validatePassword(password)) {
    setPasswordError('Password must contain at least 8 characters, including uppercase, lowercase, number and special character!');
    isValid = false;
  } else {
    setPasswordError('');
  }

  return isValid;
};
  return (
  <>
    <a href="https://wa.me/918102774475"><img src="/Briztech-Final-Project/images/chatbot.gif" className="chat-gif" alt="chatbot"/></a>

    <div className="login-outer">
    
    <img src="/Briztech-Final-Project/images/backg2.jpg" alt="background" className="login-bg"/>

    <div className="login-inner">

        <Link to={"/"}><button className="close" id="login-close">X</button></Link>

        <h1>User Login</h1><br/>
    
        <input 
        type="email" 
        value= {email} 
        onChange={(e)=>{setEmail(e.target.value);}} 
        className="user" 
        placeholder="Email" 
        required/>

        <i className="fas fa-user"></i>
   
        {emailError && <span className='invalid-input'>{emailError}</span>}      
        <br/>
        
        <input 
         type="password"
         value={password} 
         onChange={(e)=>{setPassword(e.target.value);}} className="password" 
         placeholder="Password" 
         required/>

         <i className="fas fa-lock"></i>
        
        {passwordError && <span className='invalid-input'>{passwordError}</span>}

        <button 
        className="login-btn" 
        onClick={handleLogin}>
          Login
        </button>
        <br/>
       
        <p className="forget">Forgot Password? <a href>Click Here</a></p><br/>
        
        <Link to={"/signup"}> 
        <p className="Create" id="sign-page">
          Create Account
        </p>
        </Link>
        <ToastContainer className={"toast"}/>

    </div>

   </div>
   </>
  );
};

export default Login;