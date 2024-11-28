const express = require("express");
require("./Config")
let User = require("./User");
let Order = require("./Order");
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

app.listen(8000, () => {
    console.log("running on port 8000");
})