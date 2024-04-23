import {Link} from "react-router-dom";
import '../CSS-Files/Blogs.css';

const Blogs = () => {
  return (
<div class="blog-main">

<a href="https://wa.me/918102774475" target=""><img src="images/chatbot.gif" alt="chatbot" className="chat-gif"/></a>

<h1 class="blogs-head fa-fade"><b>Recent Posts</b></h1><br/>
 
<Link to="/blogpage1">
  <div class="blogs">
    <img src="images/blogpic1.jpg" alt=""/>

      <div class="inner-blog">
    
        <div class="admin-div">
            <img src="images/Nileshimg.jpg" alt=""/>
            <p class="admin">Admin<br/>March 11,2024</p>
        </div><br/><br/>
        <h3>Top 8 Herbs and Spices with Powerful Health benefits</h3><br/>
        <p class="blog-para">Herbs and spices have been widely valued for centuries, both for their healing properties and their flavor. Modern research has found evidence for numerous health benefits. Continue Reading.....
        </p>
        <br/><br/><hr/><br/><br/>
    
            <div class="view-para">
                <p><b><i class="fa-solid fa-eye"></i> 1.3K Views &ensp;&ensp;0 comments</b></p>
            <p><b>109 &nbsp;<i class="fa-regular fa-heart fa-beat" style={{color: "#ec0909"}}></i></b></p>
            </div>
        </div>
  </div>
  </Link>

<Link to="/blogpage2">
  <div class="blogs">
    <img src="images/blogpic2.jpg" alt=""/>

    <div class="inner-blog">
    
        <div class="admin-div">
            <img src="images/Nileshimg.jpg" alt=""/>
            <p class="admin">Admin<br/>March 24,2024</p>
        </div><br/><br/>
        <h3>Natural Ayurvedic Herbs for Health Lifestyle</h3><br/>
        <p class="blog-para">Ayurveda is a traditional Indian system of medicine. It aims to preserve health and wellness by keeping the mind, body, and spirit in balance and preventing disease rather than treating it. Continue Reading.....
        </p>
        <br/><br/><hr/><br/><br/>
    
            <div class="view-para">
                <p><b><i class="fa-solid fa-eye"></i> 2.4K Views &ensp;&ensp;5 comments</b></p>
            <p><b>240 &nbsp;<i class="fa-regular fa-heart fa-beat" style={{color:"#ec0909"}}></i></b></p>
            </div>
        
    </div>
  </div>
</Link>

<Link to="/blogpage3">
 <div class="blogs">
    <img src="images/blogpic3.jpg" alt=""/>

    <div class="inner-blog">
    
        <div class="admin-div">
            <img src="images/Nileshimg.jpg" alt=""/>
            <p class="admin">Admin<br/>March 11,2024</p>
        </div><br/><br/>
        <h3>World's Most Popular and Effective Herbal Medicines </h3><br/>
        <p class="blog-para">For centuries, cultures around the world have relied on traditional herbal medicine to meet their healthcare needs despite of medical and technological advancements. Continue Reading.....
        </p>
        <br/><br/><hr/><br/><br/>
    
            <div class="view-para">
                <p><b><i class="fa-solid fa-eye"></i> 1.9K Views &ensp;&ensp;67 comments</b></p>
            <p><b>562 &nbsp;<i class="fa-regular fa-heart fa-beat" style={{color: "#ec0909"}}></i></b></p>
            </div>
        
    </div>
 </div>
</Link>


</div>
  );
};

export default Blogs;