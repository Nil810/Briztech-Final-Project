import './CSS-Files/Cart.css';
import './CSS-Files/Header.css';
import { useRef } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {loadStripe} from '@stripe/stripe-js';


const Cart = ({cartItems, handleAddProduct , handleRemoveProduct, handleRemoveItem, handleCartClear}) => {

let totalPrice = cartItems.reduce((price, item) => price + item.price * item.quantity, 0);

const orderSuccess=useRef();

const scrollToTop = ()=>{
  window.scrollTo(0,0);
}

const clearEachItem = (productId) => {
  handleRemoveItem(productId);
  toast.success("Item removed from cart!");
};


const orderHandle = async () => {
  try {
    const userData = JSON.parse(localStorage.getItem('user'));

    const orderData = cartItems.map(item => ({
      userId:userData._id,
      userName: userData.name,
      product: item.names,
      price: item.price,
      mrp: item.mrp, 
      discount: item.discount,
      quantity: item.quantity,
      total: item.price * item.quantity
    }));

    const response = await fetch('http://localhost:8000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData)
    });

    const data = await response.json();
    console.log('Server response:', data);
    
    // toast("Order Successful. It will reach you in 3-4 working days!");
    // setTimeout(() => {
    //   toast("Thank You for Order! 😊");
    // }, 3000);
  
  } catch (err) {
    console.error('Order error:', err);
    toast.error("Failed to place order");
  }
};


const makePayment =async ()=>{
  const stripe = await loadStripe("pk_test_51QRw29GBbiNJ7Qs4EcKcIhN5kBsR77Vkrp8uNiN3eQHFEXKKEm9eXFp0t30Eo15vAIyj9tRlXG8QaV2ll0GsXegK00y686yBta");

  const response = await fetch("http://localhost:8000/api/create-checkout-session",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({
      products:cartItems
    })
    
  })
  const session = await response.json();
  console.log(session);
  const result = await stripe.redirectToCheckout({
    sessionId:session.id
  });
  if(result.error){
    console.warn(result.error.message);
  }
}

 
  return (
        <div className="cart-outerdiv">

          <a href="https://wa.me/918102774475" target=""><img src="/Briztech-Final-Project/images/chatbot.gif" alt="chatbot" className="chat-gif"/></a>
     
            <div className="cart-items">

              <div className="cart-items-header">
              <h2 className="cart-items-headtext">Cart Items</h2>
              </div>

              <div className="clear-cart">
                {
                  cartItems.length >= 1 && (
                   
                    <button class="clear-cart-btn" onClick={handleCartClear}>
                      CLOSE <i class="fa-solid fa-xmark fa-beat">
                      </i></button>
                  )
                }
              </div>

              {cartItems.length===0 && (
                <div className="cart-items-empty">
                  Your cart is empty.
                </div>
              )}

              <div>

                {cartItems.map((item) => (
                    <div key={item.id} className="cart-items-list">

                      <button className="trash" onClick={() => clearEachItem(item.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                      
                      <img className="cart-items-image" src={item.image} alt=""/>

                      <div className="cart-items-name">
                      {item.names}
                      </div>

                      <div className="cart-items-mrp">
                      ₹{item.price}
                      </div>
                      
                      <div className="cart-items-function">

                      <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button> 
                        {item.quantity}                      
                        <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>

                      </div>
                      <div className="cart-items-price">
                      ₹{item.quantity * item.price}
                      </div>

                    </div>
                  
                ))}

              </div>

                <div className="cart-items-total-price-name">
                  Total Price:&nbsp;
                  <div className="cart-items-total-price fa-fade" >
                   ₹{totalPrice}.00
                  
                  </div>
                          
                </div>

                <button 
                className="bn4 odr-btn" 
                ref={orderSuccess} 
                onClick={function(event){orderHandle(); scrollToTop(); handleCartClear(); makePayment();}}>
                  Checkout
                </button>          
          
                <ToastContainer className={"toast-cart"}/>
            </div>
            
        </div> 
  );
};    

export default Cart;