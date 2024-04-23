import React from 'react';
import '../CSS-Files/Home.css';
import '../CSS-Files/Media.css';
import{Link} from "react-router-dom";
import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
   const mailinput = useRef();
   
   const subscribe = () => {
    var email=mailinput.value;
    if(email==="")
        {
            
           toast("Please Enter Your Valid Email!");       
        }

    else{
         toast("Thank you for subscribing! 😊");
         
        }
};
  
    
  return (
<>
<a href="https://wa.me/918102774475" target=""><img src="/Briztech-Final-Project/images/chatbot.gif" alt="chatbot" className="chat-gif"/></a>

<div className="carousel">

   <ReactPlayer url={'/Briztech-Final-Project/videos/carouselvideo.mp4'} playing={true} muted={true} loop={true} width="100%" height="100%" className="carousel-video"/>
  
  <div className="carousel-content">
    <div className="img1-heading" ><h1>Nourish Your Immune System</h1></div>

    <p className="img1-para">With our wide variety of Herbal Products that will boost your immune system and healthy lifestyle.<br/>
        So don't think more and join us for a glorious healthy future.... 😊😊 </p>

        <Link to={"/products"}><button className="read-more fa-fade fa-beat"><i className="fa-sharp fa-solid fa-lock"></i>&nbsp;Order Now</button></Link>

  </div>

</div>

<div className="about-us-div" id="ou">


  <h2 className="logo-head fa-fade ">Why Choose Us?</h2>

  <div className="about-logo-image">
    <img src="/Briztech-Final-Project/images/treelogo.png" alt="logo" className="tree-logo fa-fade"/>
    <img src="/Briztech-Final-Project/images/bodycare.png" alt="logo" className="body-logo fa-fade"/>
    <img src="/Briztech-Final-Project/images/selfcare.png" alt="logo" className="self-logo fa-fade"/>
  </div>

    <li className="slogan-head ">
    <h4><u>Protect<br/>Environment</u></h4>
    <h4><u>Support<br/>Hygiene</u></h4>
    <h4><u>Promotes<br/>Health</u></h4>
    </li>

    <p className="logo-para">Our main priority is to make world chemical free by filling your life with goodness of herbs.
        <br/><br/>
        Our approach is to <i><b>preserve,protect</b></i> and <i><b>nourish</b></i>, creating long-lasting beauty and health that starts from within.<br/><br/>Shop our products having goodness of natural herbs and get your health in your control....
    </p>

    <center><Link to={"/about"}><button className="ab-btn fa-beat">About Us</button></Link></center>
   

</div>

<div className="our-products" id="categories">
  <img src="/Briztech-Final-Project/images/backg1.jpg" alt="background-img" className="prod-bg"/>
  <h1 className="prods-head">Categories</h1>

  <div className="products">
   
    <Link to="/soaps">
        <div className="prod-inner-div">
            <img src="/Briztech-Final-Project/images/soapsample1.png" alt="soap"/>
                <h3 className="prod-inner-cont">Soaps</h3>
           
        </div>   
    </Link>

    <Link to={"/dental"}>
        <div className="prod-inner-div">
            <img src="/Briztech-Final-Project/images/pasteimg.png" alt="toothpaste"/>
            <h3 className="prod-inner-cont">Dental Care</h3>
        </div>
    
    </Link>
    <Link to={"/shampoo"}>
        <div className="prod-inner-div">
            <img src="/Briztech-Final-Project/images/shampoo.png" alt="shampoo" className="shampoo-sample-img"/>
            <h3 className="prod-inner-cont">Shampoo /<br/>Conditioner</h3>
        </div>
    </Link>
    
  
</div>

  <div className="products">

    <Link to={"/oil"}>
    <div className="prod-inner-div">
       
         <img src="/Briztech-Final-Project/images/oilsample.png" alt="oil"/>
        <h3 className="prod-inner-cont">Hair Oil</h3>
    </div>
    </Link>

    <Link to={"/health"}>
        <div className="prod-inner-div">   
            <img src="/Briztech-Final-Project/images/heathcare.png" alt="health drink"/>
            <h3 className="prod-inner-cont">Health Care</h3>
        </div>
    </Link>
   
    <Link to={"/skin"}>
        <div className="prod-inner-div">
            <img src="/Briztech-Final-Project/images/creamsample.png" alt="Skin care"/>
            <h3 className="prod-inner-cont">Skin Care</h3>
       </div>
     </Link> 
    
  </div>

</div>

<div className="blogs-div" id="bl">

    <h1 className="blogs-head fa-fade"><b>Recent Posts</b></h1><br/>
     
    <Link to="/blogpage1">
      <div className="blogs">
        <img src="/Briztech-Final-Project/images/blogpic1.jpg" alt=""/>

          <div className="inner-blog">
        
            <div className="admin-div">
                <img src="/Briztech-Final-Project/images/Nileshimg.jpg" alt=""/>
                <p className="admin">Admin<br/>March 11,2024</p>
            </div><br/><br/>
            <h3>Top 8 Herbs and Spices with Powerful Health benefits</h3><br/>
            <p className="blog-para">Herbs and spices have been widely valued for centuries, both for their healing properties and their flavor. Modern research has found evidence for numerous health benefits. Continue Reading.....
            </p>
            <br/><br/><hr/><br/><br/>
        
                <div className="view-para">
                    <p><b><i className="fa-solid fa-eye"></i> 1.3K Views &ensp;&ensp;0 comments</b></p>
                <p><b>109 &nbsp;<i className="fa-regular fa-heart fa-beat" style={{color: "#ec0909"}}></i></b></p>
                </div>
            </div>
      </div>
      </Link>

    <Link to="/blogpage2">
      <div className="blogs">
        <img src="/Briztech-Final-Project/images/blogpic2.jpg" alt=""/>

        <div className="inner-blog">
        
            <div className="admin-div">
                <img src="/Briztech-Final-Project/images/Nileshimg.jpg" alt=""/>
                <p className="admin">Admin<br/>March 24,2024</p>
            </div><br/><br/>
            <h3>Natural Ayurvedic Herbs for Health Lifestyle</h3><br/>
            <p className="blog-para">Ayurveda is a traditional Indian system of medicine. It aims to preserve health and wellness by keeping the mind, body, and spirit in balance and preventing disease rather than treating it. Continue Reading.....
            </p>
            <br/><br/><hr/><br/><br/>
        
                <div className="view-para">
                    <p><b><i className="fa-solid fa-eye"></i> 2.4K Views &ensp;&ensp;5 comments</b></p>
                <p><b>240 &nbsp;<i className="fa-regular fa-heart fa-beat" style={{color:"#ec0909"}}></i></b></p>
                </div>
            
        </div>
      </div>
    </Link>

    <Link to="/blogpage3">
     <div className="blogs">
        <img src="/Briztech-Final-Project/images/blogpic3.jpg" alt=""/>

        <div className="inner-blog">
        
            <div className="admin-div">
                <img src="/Briztech-Final-Project/images/Nileshimg.jpg" alt=""/>
                <p className="admin">Admin<br/>March 11,2024</p>
            </div><br/><br/>
            <h3>World's Most Popular and Effective Herbal Medicines </h3><br/>
            <p className="blog-para">For centuries, cultures around the world have relied on traditional herbal medicine to meet their healthcare needs despite of medical and technological advancements. Continue Reading.....
            </p>
            <br/><br/><hr/><br/><br/>
        
                <div className="view-para">
                    <p><b><i className="fa-solid fa-eye"></i> 1.9K Views &ensp;&ensp;67 comments</b></p>
                <p><b>562 &nbsp;<i className="fa-regular fa-heart fa-beat" style={{color: "#ec0909"}}></i></b></p>
                </div>
            
        </div>
     </div>
    </Link>

   <Link to="/blogs"><div className=" blog-btn"><button className="bn4">Show More</button></div></Link> 

</div>

<div className="video-div" id="vi">

    <div>
   
    <iframe src="https://www.youtube.com/embed/wHhW7-NkNBY?si=lq82-twALd9LYV84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="videos"  allowfullscreen></iframe>
    <br/><br/>
    <p><b>The Best Herbs for Healthy Skin</b></p>
        <br/><br/><br/><br/><br/><br/>
   
    <iframe src="https://www.youtube.com/embed/_Il51tOLnqo?si=dYo20wO5G9qY4NNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="videos" allowfullscreen></iframe>
    <br/><br/>
    <p><b>Top 5 Impactful Herbs of Ayurveda</b></p>
    </div>
    <div>
    
    <iframe src="https://www.youtube.com/embed/lGZEbEa9y6w?si=NEoAxvLPjq-qFAJy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="videos" allowfullscreen></iframe>
    <br/><br/>
    <p><b>Clear and Glowing skin with herbs</b></p>
    <br/><br/><br/><br/><br/><br/>
    <iframe src="https://www.youtube.com/embed/l3-uS8JO8yc?si=1C6k5g1-1C-50Fi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="videos" allowfullscreen></iframe>
    <br/><br/>
    <p><b>Herbs that Help to Heal the Body</b></p>
    </div>


</div>

<div className="testimonials" id="te">
    <h2>Testimonials</h2>
    <div className="quotation"><i className="fa-solid fa-quote-left" style={{color:"#119713"}}></i></div>
    <p className="testi-para">They have a wide range of herbal medicines for all kind of health problems.</p>
    <h4>Raghini Pathak</h4>

</div>

<div className="newslater" id="ne">
   
    <h2><b>Don't miss Our Updates</b></h2>
    <p className="newspara">Subscribe now to get the latest trends, updates, new arrivals, offers,<br/>
    and enjoy exclusive sales! </p>
    <input type="email" id="email" className="emailinput" ref={mailinput} placeholder ="Your Email"/>

<button className="subbtn" onClick={subscribe}>SUBSCRIBE </button>
<ToastContainer className={"toast-home"}/>

</div>

</>
 );
};
export default Home;
