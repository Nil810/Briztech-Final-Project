import './CSS-Files/Home.css';
import {Link} from "react-router-dom";

const Products = () => {
  return  (
   
   <div className="categories">
    <a href="https://wa.me/918102774475" target=""><img src="/Briztech-Final-Project/images/chatbot.gif" alt="chatbot" className="chat-gif"/></a>
  <img src="/Briztech-Final-Project/images/backg1.jpg" alt="background-img" className="prod-bg"/>
  <h1 className="prods-head">Categories</h1>

  <div className="products">
   
  <Link to="/soaps">
        <div class="prod-inner-div">
            <img src="/Briztech-Final-Project/images/soapsample1.png" alt="soap"/>
                <h3 class="prod-inner-cont">Soaps</h3>
           
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

  );
};

export default Products;