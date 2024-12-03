const express = require("express");
const Order = require('./Order');
require("./Config")
let User = require("./User");
const cors = require("cors");
const app = express();
app.use(express.json());//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());//Middleware
const stripe = require('stripe')('sk_test_51QRw29GBbiNJ7Qs4laxJsOPZ1a6UpEJFSA9Z91chhUisZuSaeyu1p6lLgXlHE71yOzZGqzi9byLevlOKEQ77Y9xm00MgztD596');

app.post("/signup", async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post("/login", async (req,res)=>{
    if(req.body.password && req.body.email)
    {
        let user = await User.findOne(req.body).select("-password");
        if(user){
        res.send(user);
        }
        else{
        res.send({result:"User not found!"});
        }
    }
    else{
    res.send({result:"Please enter both email and password!"});
    }
})

app.post("/cart", async (req, res) => {
    try {
      const orders = req.body;
      const savedOrders = await Order.insertMany(orders);
      res.status(200).json({
        message: "Orders saved successfully",
        orders: savedOrders
      });
    } catch (error) {
      res.status(500).json({
        message: "Error saving orders",
        error: error.message
      });
    }
  });

  //checkout api
app.post("/api/create-checkout-session", async (req, res) => {
  const {products} = req.body;

  const lineItems = products.map((product)=>({
    
    price_data:{
    currency:"inr",

    product_data:{
      name: product.names,
    },
    unit_amount:product.price*100,
    },
    quantity:product.quantity
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'https://localhost:3000/success',
    cancel_url: 'https://localhost:3000/cancel',
  });

  res.json({ id: session.id });
})



app.listen(8000, () => {
    console.log("running on port 8000");
})