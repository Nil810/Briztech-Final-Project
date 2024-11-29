const mongoose= require('mongoose');

const orderSchema = new mongoose.Schema({
        name:String,
        price:String, 
        mrp:String,
        discount:String,
        quantity:String,
        total:String,
    });

    module.exports = mongoose.model("Orders",orderSchema);