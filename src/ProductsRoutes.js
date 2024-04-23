// import React from 'react';
// import Cart from './Cart';
// import Soaps from './Products/Soaps';
// import Oil from './Products/Oil';
// import Dental from './Products/Dental';
// import Health from './Products/Health';
// import Shampoo from './Products/Shampoo';
// import Skin from './Products/Skin';
// import { BrowserRouter,Route, Routes} from 'react-router-dom';

// const ProductsRoutes = ({productItems,productItems2,productItems3,productItems4,productItems5,productItems6,cartItems, handleAddProduct ,handleRemoveProduct, handleCartClear}) => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/soaps" element={<Soaps productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
//         <Route path="/oil" element={<Oil productItems2={productItems2} handleAddProduct={handleAddProduct}/>}/>
//         <Route path="/dental" element={<Dental productItems3={productItems3} handleAddProduct={handleAddProduct}/>}/>
//         <Route path="/health" element={<Health productItems4={productItems4} handleAddProduct={handleAddProduct}/>}/>
//         <Route path="/shampoo" element={<Shampoo productItems5={productItems5} handleAddProduct={handleAddProduct}/>}/>
//         <Route path="/skin" element={<Skin productItems6={productItems6} handleAddProduct={handleAddProduct}/>}/>
//         <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>}/>
        
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default ProductsRoutes;