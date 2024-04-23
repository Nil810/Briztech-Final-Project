import './CSS-Files/Cart.css';
import './CSS-Files/Header.css';
import { useRef } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cartItems, handleAddProduct , handleRemoveProduct, handleCartClear}) => {

let totalPrice = cartItems.reduce((price, item) => price + item.price * item.quantity, 0);

const orderSuccess=useRef();

const orderHandle = () =>{
    toast("Order Successful. It will reach you in 3-4 working days!");
    setTimeout(() =>{
      toast("Thank You for Order! 😊");
    },3000);
  
    }

 
  return (
        <div className="cart-outerdiv">
            <div className="cart-items">
              <h2 className="cart-items-header fa-fade">Cart Items</h2>
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
                      
                      <img className="cart-items-image" src={item.image} alt=""/>

                      <div className="cart-items-name">
                      {item.names}
                      </div>
                      <div className="cart-items-function">

                        <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>
                        <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>

                      </div>
                      <div className="cart-items-price">
                        {item.quantity} * ₹{item.price}
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
               
                <button class="bn4 odr-btn" ref={orderSuccess} onClick={orderHandle} onMouseUp={handleCartClear}>Buy Now</button><br/>
                <ToastContainer className={"toast-cart"}/>
            </div>
            
        </div>
  );
};

export default Cart;