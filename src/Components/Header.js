import '../CSS-Files/Header.css';
import{Link} from "react-router-dom";
import React, {useRef} from 'react';

const Header = ({cartItems}) => {

    const productsRef=useRef();
    const moreRef=useRef();
    const cartRef=useRef();

    const productsHover = () => {
       
        productsRef.current.style.display = "block";
       
    };
    const moreHover = () => {
       
        moreRef.current.style.display="block";
    };

    const mouseLeave = () => {
        productsRef.current.style.display = "none";
        moreRef.current.style.display = "none";
    };
    
    const cartHover = () => {
       
        cartRef.current.style.display = "block";
       
    };
    const cartLeave = () => {
       
        cartRef.current.style.display = "none";
    };
    const cartClose=()=>{
        cartRef.current.style.display="none";
    }
    const barClick= () =>{
        cartRef.current.style.display="block";
    }


  return (
  
    <div className="head">

        <div class="float-cart" ref={cartRef} onMouseLeave={cartLeave}>

            <button class="cls-btn" onClick={cartClose}>
                CLOSE <i class="fa-solid fa-xmark fa-beat"></i>
                </button><br/>
            <h2>YOUR CART IS EMPTY!</h2><br/>
            <p>Not Sure Where To Start?<br/><br/><b><u>Try Our Collections:</u></b></p><br/><br/>
            <Link to={"./soaps"}><button class="list-btn" >SOAPS</button></Link><br/><br/>
            <Link to={"./dental"}><button class="list-btn" > DENTAL CARE</button></Link><br/><br/><br/>
            <Link to={"./shampoo"}><button class="list-btn" >SHAMPOO & CONDITIONER</button></Link><br/><br/><br/>
            <Link to={"./oil"}><button class="list-btn">HAIR OIL</button></Link><br/><br/><br/>
            <Link to={"./health"}><button class="list-btn" >HEALTH CARE</button></Link><br/><br/><br/>
            <Link to={"./skin"}><button class="list-btn" >SKIN CARE</button></Link><br/><br/><br/><br/>
            <Link to={"/products"} class="bn4 cart-order-btn">Order Now</Link><br/><br/>

            <div class="secure">
                <div><i class="fa-solid fa-shield-halved fa-fade" style={{color: "#3f7e1d font-size:2.7rem"}}></i><br/><br/>Secure Payments</div>
                <div><i class="fa-solid fa-users fa-fade" style={{color: "#3f7e1d font-size:2.7rem"}}></i><br/><br/>10 Lakh+ Happy Customers</div>
                <div><i class="fa-solid fa-truck-fast fa-fade" style={{color: "#3f7e1d font-size:2.7rem"}}></i><br/><br/>Free Shiping</div>
                <div><i class="fa-solid fa-hourglass-start fa-fade" style={{color: "#3f7e1d font-size:2.7rem"}}></i><br/><br/>Guranteed Dispatch</div>
            </div>

        </div>

    <div className="header">
        <div className="header-logo">
            <span><a href="https://www.facebook.com/profile.php?id=61557182072307&mibextid=ZbWKwL" className="logo1"><i className="fa-brands fa-facebook"></i></a></span>
            <span><a href="https://www.instagram.com/_your_herbs_?igsh=MWg2MnNzODkyb2tmaQ==" className="logo1"><i className="fa-brands fa-instagram"></i></a></span>
            <span><a href="https://twitter.com/yourherbs810" className="logo1"><i className="fa-brands fa-x-twitter"></i></a></span>
            <span><a href="https://whatsapp.com/channel/0029VaP2o6jADTOGHuEraz2x" className="logo1"><i className="fa-brands fa-whatsapp"></i></a></span>
            <span><a href="https://www.youtube.com/channel/UC0OP8-cW1A2OYmtni3O1Jkw" className="logo1"><i className="fa-brands fa-youtube"></i></a></span>
        </div>
    
        <span className="details">
            <i className="fa-sharp fa-solid fa-phone fa-shake"></i> &nbsp;+918102774475
        </span>
        <span>
            <a href="mailto:yourherbs810@gmail.com" className="details">
            <i className="fa-sharp fa-solid fa-envelope fa-fade"></i>&ensp;yourherbs810@gmail.com</a>
        </span>
     
    
    <div className="lastheader">
    
        <span className="track">
           <a href="https://ekartlogistics.com/">Track Order</a>&nbsp;&nbsp;
            <i className="fa-sharp fa-solid fa-truck fa-beat-fade"></i>
            </span>
       
           <span className="sign">
           
            <Link to={"/login"} className="log-sign">
            <span className="user-in">Log In|Sign Up</span>
             </Link>&nbsp;

            <span className="user-out">Log Out</span>

            <i class="fa-solid fa-circle-user log-user"></i>
           </span> 
        
    </div>
    
    </div>
    
    <div className="prod-list" ref={productsRef} onMouseLeave={mouseLeave} onMouseOver={productsHover}>
        <div><Link to={"/soaps"} className="lists"><p>Soaps</p></Link><hr/></div>
        <div><Link to={"./dental"} className="lists"><p>Dental Care</p></Link><hr/></div>
        <div><Link to={"./shampoo"} className="lists"><p>Shampoo & Conditioner</p></Link><hr/></div>
        <div><Link to={"./oil"} className="lists"><p>Hair Oil</p></Link><hr/></div>
        <div><Link to={"./health"} className="lists"><p>Health Care</p></Link><hr/></div>
        <div><Link to={"./skin"} className="lists"><p>Skin Care</p></Link></div>
    </div>
    
    <div className="more" ref={moreRef} onMouseLeave={mouseLeave} onMouseOver={moreHover}>
        <div><a href="#vi" className="lists"><p>Videos</p></a><hr/></div>
        <div><Link to={"/blogs"} className="lists"><p>Blogs</p></Link><hr/></div>
        <div><Link to={"/cart"} className="lists"><p>Cart</p></Link><hr/></div>
        <div><Link to={"/about"} className="lists"><p>Our Vision</p></Link><hr/></div>
        <div><a href="#fo" className="lists"><p>Location</p></a></div>
    </div>
    
    <div className="navbar">
        <div className="leftnav">
            <span className="bars" onMouseOver={cartHover} onClick={barClick}><i className="fa-sharp fa-solid fa-bars" style={{color: "#d8b433"}}></i></span>
            <img src="/Briztech-Final-Project/images/projectlogo2.png" alt="Your-Herbs-Logo" className="mainlogo"/> 
        </div>
    
        <ul className="centernav">  
            <li ><Link to="/" className="nav-items">Home</Link> </li>
            <li><Link to="/about"  className="nav-items">About</Link></li>
            <li className="li-prod" onMouseOver={productsHover} onMouseLeave={mouseLeave}><Link to="/products" className="nav-items">Products</Link></li>
            <li><Link to="/contact" className="nav-items">Contact Us</Link></li>
            <li className="li-more" onMouseOver={moreHover} onMouseLeave={mouseLeave}><a href className="nav-items">More</a></li>
        </ul>
        <div className="rightnav">
    
            <div className="searchdiv">
                <input type="search" name="search" placeholder="Search.." className="search"/>
                <button className="searchbtn">
                    <i className="fa-sharp fa-solid fa-magnifying-glass" style={{color: "#d3af2e"}}></i>
                    </button>
            
               <Link to={"/cart"}>

                <div >
                    <i className="fa-sharp fa-solid fa-cart-plus cart iframe-link fa-fade" style={{color: "#d4b02e"}}  ></i>

                    <span className="cart-length">
                        {cartItems.length===0 ? "0" : cartItems.length}
                        </span>
                </div>

                </Link>
            </div>
                

        </div>
        
    </div>
    
</div>
  
  
  );
};

export default Header;