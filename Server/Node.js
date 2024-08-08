const express = require("express");
const collection = require("./Mongo");
// const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// mongoose.connect('mongodb://localhost:27017/mydata', { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//     console.log("MongoDB connected successfully");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// // schema for order model
// const orderSchema = new mongoose.Schema({
//   userId: String,
//   cartItems:Array
// });

// const Order = mongoose.model('Order', orderSchema);

// //  route handler to save order data to the database  
// app.post('/cart', async (req, res) => {
//     try {
//       const { cartItems, userId } = req.body;
//       if (!cartItems || !userId) {
//         return res.status(400).send({ message: 'Invalid request' });
//       }
//       const order = new Order({ cartItems, userId });
//       const savedOrder = await order.save();
//       res.send({ message: 'Order placed successfully', order: savedOrder });
//     } catch (err) {
//       console.error(err);
//       res.status(500).send({ message: 'Error placing order' });
//     }
//   });




app.get("/login",cors(), (req, res) => {
    
})

app.post("/login", async (req, res) => {
    const{email, password}=req.body;
  
    // check here treated as a user
    try{
        const check=await collection.findOne({email:email , password:password});

    
        if(check){
            res.json("Already exist");
            // localStorage.setItem('userId', check.id); // Store the user ID in local storage

        }
       else{
        res.json("Not exist");
       }
    }
    catch(e){
        req.json("Not exist");
    }

})


app.post("/signup", async (req, res) => {
    const{email, password }=req.body;

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email});
        if(check){
            res.json("Already exist");
        }
       else{
        res.json("Not exist");
        await collection.insertMany([data]);
       }
    }
    catch(e){
        req.json("Not exist");
    }

})

app.listen(8000, () => {
    console.log("running on port 8000");
})