import React,{useState} from 'react';
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
import Signup from './Signup';
import data from './Products/Data';

import Cart from './Cart';
 import Soaps from './Products/Soaps';
 import Oil from './Products/Oil';
 import Dental from './Products/Dental';
 import Health from './Products/Health';
 import Shampoo from './Products/Shampoo';
 import Skin from './Products/Skin';

import{HashRouter, Routes, Route} from 'react-router-dom';

const App = () => {
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

    {/* <ProductsRoutes
        productItems={productItems} 
        productItems2={productItems2}
        productItems3={productItems3}
        productItems4={productItems4}
        productItems5={productItems5}
        productItems6={productItems6}
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClear={handleCartClear}
        /> */}

    <Routes>  
        <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blogpage1" element={<BlogPage1/>}/>
            <Route path="/blogpage2" element={<BlogPage2/>}/>
            <Route path="/blogpage3" element={<BlogPage3/>}/>        
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/soaps" element={<Soaps productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
        <Route path="/oil" element={<Oil productItems2={productItems2} handleAddProduct={handleAddProduct}/>}/>
        <Route path="/dental" element={<Dental productItems3={productItems3} handleAddProduct={handleAddProduct}/>}/>
        <Route path="/health" element={<Health productItems4={productItems4} handleAddProduct={handleAddProduct}/>}/>
        <Route path="/shampoo" element={<Shampoo productItems5={productItems5} handleAddProduct={handleAddProduct}/>}/>
        <Route path="/skin" element={<Skin productItems6={productItems6} handleAddProduct={handleAddProduct}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>}/>

         </Route>
    </Routes>
    <Footer/>
  </HashRouter>
  );
};
// "homepage": "https://Nil810.github.io/Briztech-Final-Project/#/",
// "predeploy": "npm run build",
// "deploy": "gh-pages -b master -d build"

export default App;
