const express = require("express");
const collection = require("./Mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/login",cors(), (req, res) => {
    
})

app.post("/login", async (req, res) => {
    const{email, password}=req.body;
    
    try{
        const check=await collection.findOne({email:email , password:password});

    
        if(check){
            res.json("Already exist");
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