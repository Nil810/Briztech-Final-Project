import React from 'react';
import '../CSS-Files/Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    const scrollToTop =()=>{
        window.scrollTo(0,0);
    }
  return (
    
      <div className="footer" id="fo">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9060.768871131011!2d85.98475461915412!3d23.762228706686887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f41435e3d34db1%3A0x5e736fc75976c192!2sPhusro%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1710176465878!5m2!1sen!2sin" width="" height="" style={{border:"0"}} allowfullscreen="" loading="lazy" className="map" title="map" referrerpolicy="no-referrer-when-downgrade" id="lo"></iframe>
   
<div className="useful-links">

<h5 className="li-useful"><b><u>USEFUL LINKS</u></b></h5>
<ul className="list1">
<Link to={"/about"}><li onClick={scrollToTop}>ABOUT US</li></Link> 
    <li>PRIVACY POLICIES</li>
    <li>TERMS OF SERVICE</li>
    <li>SHIPPING</li>
    <li>PAYMENTS</li>
    
</ul>
<ul className="list2">
   <br/>
   <Link to={"/products"} ><li onClick={scrollToTop}>PRODUCTS</li></Link>
   <Link to={"/blogs"}><li onClick={scrollToTop}>BLOGS</li></Link>
   <Link to={"/cart"}><li onClick={scrollToTop}>CART</li></Link>
   <Link to={"/"}><li onClick={scrollToTop}>HOME</li></Link>
   <Link to={"/"}><li onClick={scrollToTop}>MORE</li></Link>
</ul>

<div className="footer-contact">
    <h5><b><u>CONTACT</u></b></h5><br/>
<p>829144,Main Road Phusro, Bermo,<br/>Bokaro, Jharkhand, India</p>
<p> yourherbs810@gmail.com<br/>
    +91-8102774475<br/>
    +91-9608974461
   </p>
    </div>


<div className="connect">
    <h5><b><u>CONNECT</u></b></h5><br/>
    <div className="logo">
        <span><a href="https://www.facebook.com/profile.php?id=61557182072307&mibextid=ZbWKwL" className="logo1"><i className="fa-brands fa-facebook"></i></a></span>
        <span><a href="https://www.instagram.com/_your_herbs_?igsh=MWg2MnNzODkyb2tmaQ==" className="logo1"><i className="fa-brands fa-instagram"></i></a></span>
        <span><a href="https://twitter.com/yourherbs810" className="logo1"><i className="fa-brands fa-x-twitter"></i></a></span>
        <span><a href="https://whatsapp.com/channel/0029VaP2o6jADTOGHuEraz2x" className="logo1"><i className="fa-brands fa-whatsapp"></i></a></span>
        <span><a href="https://www.youtube.com/channel/UC0OP8-cW1A2OYmtni3O1Jkw" className="logo1"><i className="fa-brands fa-youtube"></i></a></span>
    </div>
  </div>

  </div>
<p className="copy">&copy;Copyright 2024-2025. Your Herbs | All Rights Reserved.</p>

</div>
 );
};

export default Footer;
