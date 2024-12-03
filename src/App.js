import React,{useState} from 'react';
import GoToTop from './Components/GoToTop';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Products';
import ContactUs from './Components/ContactUs';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blogs from './Blogs/Blogs';
import BlogPage1 from './Blogs/BlogPage1';
import BlogPage2 from './Blogs/BlogPage2';
import BlogPage3 from './Blogs/BlogPage3';
import Login from './Login';
import SignUp from './SignUp';
import data from './Products/Data';
import Success from './Components/Success';
import Cancel from './Components/Cancel';
import PrivateComponent from './Components/PrivateComponent';

import Cart from './Cart';
 import Soaps from './Products/Soaps';
 import Oil from './Products/Oil';
 import Dental from './Products/Dental';
 import Health from './Products/Health';
 import Shampoo from './Products/Shampoo';
 import Skin from './Products/Skin';

import{HashRouter, Routes, Route} from 'react-router-dom';

const App = () => {

//For cart
  const {productItems} = data;
  const {productItems2} = data;
  const{productItems3} = data;
  const{productItems4} = data;
  const{productItems5} = data;
  const{productItems6} = data;
  

  const[cartItems,setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity + 1} : item)
    );
    } 
    else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity - 1} : item)
    );
    }
  };

  const handleCartClear = () => {
    setCartItems([]);
  };

  return (
  <HashRouter>

    <Header cartItems={cartItems}/>
    <Routes> 
    <Route path="/success" element={<Success/>}/>
    <Route path= "/cancel" element={<Cancel/>}/>
            <Route element={<PrivateComponent/>}>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blogpage1" element={<BlogPage1/>}/>
            <Route path="/blogpage2" element={<BlogPage2/>}/>
            <Route path="/blogpage3" element={<BlogPage3/>}/>                    
            <Route path="/soaps" element={<Soaps productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
            <Route path="/oil" element={<Oil productItems2={productItems2} handleAddProduct={handleAddProduct}/>}/>
            <Route path="/dental" element={<Dental productItems3={productItems3} handleAddProduct={handleAddProduct}/>}/>
            <Route path="/health" element={<Health productItems4={productItems4} handleAddProduct={handleAddProduct}/>}/>
            <Route path="/shampoo" element={<Shampoo productItems5={productItems5} handleAddProduct={handleAddProduct}/>}/>
            <Route path="/skin" element={<Skin productItems6={productItems6} handleAddProduct={handleAddProduct}/>}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>}/>
           
           
            </Route>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>} />
               
    </Routes>
    <GoToTop/> 
    <Footer/>
  </HashRouter>
  );
};

export default App;
