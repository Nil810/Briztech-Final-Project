const express = require("express");
require("./Config")
let User = require("./User");
// const collection = require("./Mongo");
const cors = require("cors");
const app = express();
app.use(express.json());//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());//Middleware

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

// app.get("/login",cors(), (req, res) => {
    
// })

// app.post("/login", async (req, res) => {
//     const{email, password}=req.body;
  
//     // check here treated as a user
//     try{
//         const check=await collection.findOne({email:email , password:password});

    
//         if(check){
//             res.json("Already exist");
//             // localStorage.setItem('userId', check.id); // Store the user ID in local storage

//         }
//        else{
//         res.json("Not exist");
//        }
//     }
//     catch(e){
//         req.json("Not exist");
//     }

// })


// app.post("/signup", async (req, res) => {
//     const{email, password }=req.body;

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email});
//         if(check){
//             res.json("Already exist");
//         }
//        else{
//         res.json("Not exist");
//         await collection.insertMany([data]);
//        }
//     }
//     catch(e){
//         req.json("Not exist");
//     }

// })

app.listen(8000, () => {
    console.log("running on port 8000");
})