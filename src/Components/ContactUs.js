import React from 'react';
import '../CSS-Files/ContactUs.css';

const ContactUs = () => {
  return  (

    <div class="outer">

      <a href="https://wa.me/918102774475" target=""><img src="/Briztech-Final-Project/images/chatbot.gif" alt="chatbot" className="chat-gif"/></a>
     
     <h1 class="contactus fa-fade">Contact Us</h1>
     
     <div class="container">
        <div class="card">
           
        <h1 class="info"><b><u>OUR INFORMATION</u></b></h1>
        <div class="firstdiv">
            <span>
               <p class="office"> <b>Office Address</b></p>
                <p>829144,Main Road Phusro, Bermo,<br/> Bokaro, Jharkhand, India</p>
            
            </span>
            <span class="general">
                <p class="enquiry"><b>General Enquiry</b></p>
                <p>yourherbs810@gmail.com<br/>
                nileshpathak226@gmail.com</p>
            </span>
        </div>
        
        <div class="seconddiv">
            <span class="call">
                <p class="callus"><b>Call Us</b></p>
                <p>+91-8102774475<br/>
                    +91-7488347641<br/>
                    +91-9608974461</p>
            </span>
            <span class="timing">
                <p class="time"><b>Our Timing</b></p>
                <p>Mon-Sun : 10:00 AM to 9:00 PM</p>
            </span>
        </div>
        <img src="/Briztech-Final-Project/images/nature.jpg" alt="nature" className="nature1"/>
    </div>
    <div class="form">
        <form action="https://api.web3forms.com/submit" method="POST">
            <fieldset>
            <legend><b><h1>ENQUIRY FORM</h1></b></legend>
            <input type="hidden" name="access_key" value="710b12e4-98cd-495e-be81-11d037b65f9a"/>
            <input type="text" name="Full name" class="fullname" placeholder="Full Name*" required/>&nbsp;&nbsp;&nbsp;
            <input type="tel" name="Contact" class="contact" placeholder="Contact No.*" required/>
            <br/><br/><br/>
            <input type="email" name="Email" class="email" placeholder="Email Id*" required/><br/><br/><br/>
            <textarea cols="55" rows="6" name="message" class="message" placeholder="Your Message*" required></textarea><br/><br/><br/><br/>
            
            <button type="submit" class="bn5">Submit</button>
           
            </fieldset>
        </form>
    </div>
        </div>
        <div class="connect-sec">
           
            <h5><b><u>Join Us:</u></b></h5>
            <div class="logo-section">
                <span>
                  <a href="https://www.facebook.com/profile.php?id=61557182072307&mibextid=ZbWKwL" ><i class="fa-brands fa-facebook fa-fade logo-each" style={{color:"#1877F2"}}></i></a>
                </span>

                <span>
                  <a href="https://www.instagram.com/_your_herbs_?igsh=MWg2MnNzODkyb2tmaQ=="><i class="fa-brands fa-instagram fa-fade logo-each" style={{backgroundImage: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", borderRadius: "0.7rem"}}></i></a>
                </span>

                <span>
                  <a href="https://twitter.com/yourherbs810" ><i class="fa-brands fa-x-twitter fa-fade logo-each" style={{color: "#000"}}></i></a>
                </span>

                <span>
                  <a href="https://whatsapp.com/channel/0029VaP2o6jADTOGHuEraz2x" ><i class="fa-brands fa-whatsapp fa-fade logo-each" style={{backgroundImage: "linear-gradient(90deg, #09e259 20%, #1bcab6 90%)", borderRadius:"2.5rem"}}></i></a>
                </span>

                <span>
                  <a href="https://www.youtube.com/channel/UC0OP8-cW1A2OYmtni3O1Jkw" ><i class="fa-brands fa-youtube fa-fade logo1" style={{color: "red"}}></i></a>
                </span>
            </div>
        </div>

</div>

  );
};

export default ContactUs;