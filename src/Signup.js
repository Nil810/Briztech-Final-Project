import React, {useState,useEffect} from 'react';
import './CSS-Files/Login.css';
import {useNavigate,Link} from "react-router-dom";
import './CSS-Files/Home.css';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  
  const navigate = useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
          navigate('/');
      }
  })

  const submit = async (event)=>{
    event.preventDefault();

    const isValid = handleError();
    if (!isValid) {
      return;
  }
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
        navigate('/login');
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
     <a href="https://wa.me/918102774475"><img src="/Briztech-Final-Project/images/chatbot.gif" className="chat-gif" alt="chat-gif"/></a>

    <div className="signup-outer">
    <img src="/Briztech-Final-Project/images/backg2.jpg" alt="background" className="login-bg"/>

      <div className="signup-inner">
    
        <Link to={"/"}><button className="close" id="signin-close">X</button></Link>

        <h1>User Sign Up</h1>
        
        <input type="text" 
               value={name} 
               onChange={(e)=>{setName(e.target.value)}} 
               placeholder="Name" 
               required/>
        <i className="fas fa-user"></i><br/>

        <input type="email" 
               value={email} onChange={(e)=>{setEmail(e.target.value)}} 
               placeholder="Email"
               required/>  

        <i className="fas fa-envelope"></i><br/>

        {emailError && <span className='invalid-input'>{emailError}</span>} 

        <input type="password" 
               value={password} 
               onChange={(e)=>{setPassword(e.target.value)}} 
               placeholder="Password" 
               required/>
        
        <i className="fas fa-lock"></i><br/>

        {passwordError && <span className='invalid-input'>{passwordError}</span>}

        <button className="sign-btn" 
                onClick={submit}>
                Sign Up
        </button>
        <br/>

        <p className="forget">Already Registered? <Link>Click Here</Link></p>
        <p className="Create" id="log-page"><Link to={"/login"}>Login</Link></p>
        
        <ToastContainer className={"toast"}/>

      </div>

  </div>

   </>
  );
};

export default SignUp;
