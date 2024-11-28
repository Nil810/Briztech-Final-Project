const mongoose= require('mongoose');

const orderSchema = new mongoose.Schema({
        name:String,
        price:Number, 
        mrp:Number,
        discount:Number,
        total:Number
    });

    module.exports = mongoose.model("orders",orderSchema);