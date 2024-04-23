import React from 'react';
import '../CSS-Files/About.css';
import { useRef } from 'react';

const About = () => {

    const role= useRef();
    const role2= useRef();
    const role3= useRef();
    
    

    const roleHandle= () =>{
        // role.current.style.zIndex="1";
        role.current.style.display="block";
    }
    const roleHandle2 = () =>{
        role.current.style.display="none";
    }
    const role2Handle= () =>{
        role2.current.style.display="block";
    }
    const role2Handle2 = () =>{
        role2.current.style.display="none";
    }
    const role3Handle= () =>{

        role3.current.style.display="block";
    }
    const role3Handle2 = () =>{
        role3.current.style.display="none";
    }
    const rolehandlerall =() =>{
        role.current.style.display="none";
        role2.current.style.display="none";
        role3.current.style.display="none";
        
    }

  return (
    <div class="main-body">
    
    <a href="https://wa.me/918102774475" target=""><img src="Briztech-Final-Project/images/chatbot.gif" alt="chatbot" className="chat-gif"/></a>

    <div class="main-body-head">
         <h1>
        <span>Y</span>
        <span>O</span>
        <span>U</span>
        <span>R</span>
        <span>-</span>
        <span>H</span>
        <span>E</span>
        <span>R</span>
        <span>B</span>
        <span>S</span>
       </h1>
    </div>
  


    <div class="main-body-content">

       
        <h1><b><u>About Us</u></b></h1><br/>
       
        <p class="para1-about">
            Your Herbs is a leading provider of high-quality herbal products. We are passionate about promoting natural health and wellness through the use of traditional herbs and remedies.<br/><br/>
        Our mission is to make herbal knowledge accessible to everyone. Whether you're a seasoned herbalist or just starting your journey, we have something for you.
    </p><br/>
    <hr style={{color: "#f5f4f0"}}/> 

        <div class="about-para-div">
            <img src="/Briztech-Final-Project/images/logo.png" alt="logo" class="about-us-image"/>
            
        <h2><b><u>Why Choose Your Herbs?</u></b></h2>
        
        <ul>
            <li>🌴&nbsp;Wide selection of organic and sustainably sourced herbs...</li><br/>
            <li>🌴&nbsp; Free educational resources on herbal medicine...</li><br/>
            <li>🌴&nbsp;Expert advice from our team of herbalists...</li><br/>
            <li>🌴&nbsp;Fast and reliable shipping...</li><br/>
        </ul><br/>
        <p class="fa-fade fa-beat">Join us on our herbal journey and experience the power of nature!</p>
     <br/><hr style={{color: "#f5f4f0"}}/>
    </div>

   
    <h2 class="team-head fa-beat">Our Team</h2>

       <div class="role" ref={role} onMouseOver={rolehandlerall}>
             <h2>Founder & Developer</h2>
          </div>

        <div class="role2" ref={role2} onMouseOver={rolehandlerall}>
            <h2>Herbal <br/>Researcher</h2>
          </div>
        <div class="role3" ref={role3} onMouseOver={rolehandlerall}>
             <h2>Account<br/>Manager</h2>
            </div>

        <div class="team-section">
         
            <div class="team-member" onMouseOver={roleHandle} onMouseOut={roleHandle2}>
                
                <div>
                   

                    <h3 class="fa-fade">Nilesh Pathak</h3><br/><br/>
                    <p>nileshpathak226@gmail.com</p><br/><br/>
                    <p>
                      <span>
                        <a href="https://www.facebook.com/profile.php?id=61557182072307&mibextid=ZbWKwL" ><i class="fa-brands fa-facebook logo1" style={{color:"#1877F2"}}></i>
                        </a>
                      </span>
            
                        <span>
                          <a href="https://www.instagram.com/_your_herbs_?igsh=MWg2MnNzODkyb2tmaQ==">
                            <i class="fa-brands fa-instagram logo1" style={{backgroundImage: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" , borderRadius: "0.7rem"}}></i>
                          </a>

                        </span>

                        <span>
                          <a href="https://twitter.com/yourherbs810" ><i class="fa-brands fa-x-twitter logo1" style={{color: "#000"}}></i></a>
                          
                        </span>

                        <span>
                          <a href="https://whatsapp.com/channel/0029VaP2o6jADTOGHuEraz2x" >
                            <i class="fa-brands fa-whatsapp logo1" style={{backgroundImage: "linear-gradient(90deg, #09e259 20%, #1bcab6 90%)" , borderRadius:"2.5rem"}}></i>
                          </a>
                        </span>
                      </p>
                </div>
            </div>

            
            <div class="team-member" onMouseOver={role2Handle} onMouseLeave={role2Handle2}>
               
                <div>
                   
                    

                    <h3  class="fa-fade">Md Shahnawaj </h3><br/><br/>
                    <p>shahnawanjhussain942@gmail.com</p><br/><br/>
                    <p> <span ><a href="https://www.facebook.com/profile.php?id=61557182072307&mibextid=ZbWKwL" ><i class="fa-brands fa-facebook logo1" style={{color:"#1877F2"}}></i></a></span>
            
                        <span ><a href="https://www.instagram.com/_your_herbs_?igsh=MWg2MnNzODkyb2tmaQ=="><i class="fa-brands fa-instagram logo1" style={{backgroundImage: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" , borderRadius: "0.7rem"}}></i></a></span>
                        <span ><a href="https://twitter.com/yourherbs810" ><i class="fa-brands fa-x-twitter logo1" style={{color: "#000"}}></i></a></span>
                        <span ><a href="https://whatsapp.com/channel/0029VaP2o6jADTOGHuEraz2x" ><i class="fa-brands fa-whatsapp logo1" style={{backgroundImage: "linear-gradient(90deg, #09e259 20%, #1bcab6 90%)", borderRadius:"2.5rem"}}></i></a></span></p>
                </div>
            </div>

            
            <div class="team-member" onMouseOver={role3Handle} onMouseLeave={role3Handle2}>
               
               
                <div>
                   

                    <h3 class="fa-fade">Md Warish Ali</h3><br/><br/>
                    <p>mdwarishali757@gmail.com</p><br/><br/>
                    <p> <span ><a href="https://www.facebook.com/profile.php?id=61557182072307&mibextid=ZbWKwL" ><i class="fa-brands fa-facebook logo1" style={{color:"#1877F2"}}></i></a></span>
            
                        <span ><a href="https://www.instagram.com/_your_herbs_?igsh=MWg2MnNzODkyb2tmaQ=="><i class="fa-brands fa-instagram logo1" style={{backgroundImage: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" , borderRadius: "0.7rem"}}></i></a></span>
                        <span ><a href="https://twitter.com/yourherbs810" ><i class="fa-brands fa-x-twitter logo1" style={{color: "#000"}}></i></a></span>
                        <span ><a href="https://whatsapp.com/channel/0029VaP2o6jADTOGHuEraz2x" ><i class="fa-brands fa-whatsapp logo1" style={{backgroundImage: "linear-gradient(90deg, #09e259 20%, #1bcab6 90%)", borderRadius:"2.5rem"}}></i></a></span></p>
                </div>
            </div>
            
        </div>
        <div class="Commit">
            <h2>Our Commitment</h2>
            <p>We are committed to sourcing herbs sustainably and supporting local communities. Every product you purchase contributes to our mission of preserving herbal traditions.</p>
        </div>

        <div class="Commit">
            <h2>Contact Us</h2>
            <p>If you have any questions or need assistance, feel free to reach out to our friendly customer support team:</p>
            <div class="cont">
                <p><b>Email:</b> <a href="mailto:info@yourherbs.com">yourherbs810@gmail.com</a></p>
                <p><b>Phone:</b> +91 8102774475,
                    &nbsp;+91-9608974461
                    </p>
                    <div class="connect-sec">
           
                        <p><b>Social Media:</b></p>
                        <div class="logo-section">
                            <span ><a href="https://www.facebook.com/profile.php?id=61557182072307&mibextid=ZbWKwL" ><i class="fa-brands fa-facebook fa-fade logo1" style={{color:"#1877F2"}}></i></a></span>
            
                            <span ><a href="https://www.instagram.com/_your_herbs_?igsh=MWg2MnNzODkyb2tmaQ=="><i class="fa-brands fa-instagram fa-fade logo1" style={{backgroundImage: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", borderRadius: "0.7rem"}}></i></a></span>
                            <span ><a href="https://twitter.com/yourherbs810" ><i class="fa-brands fa-x-twitter fa-fade logo1" style={{color: "#000"}}></i></a></span>
                            <span><a href="https://whatsapp.com/channel/0029VaP2o6jADTOGHuEraz2x" ><i class="fa-brands fa-whatsapp fa-fade logo1" style={{backgroundImage: "linear-gradient(90deg, #09e259 20%, #1bcab6 90%)", borderRadius:"2.5rem"}}></i></a></span>
                            <span><a href="https://www.youtube.com/channel/UC0OP8-cW1A2OYmtni3O1Jkw" ><i class="fa-brands fa-youtube fa-fade logo1" style={{color: "red"}}></i></a></span>
                        </div>
                    </div> 

            </div>
        </div>
        <div class="main-foot"></div>
    </div>
    
   

</div>  
    
  );
};

export default About;