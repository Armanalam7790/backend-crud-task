const  mongoose  = require('mongoose')




let ProductSchema  = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    category:String,
    stock:Number,
    
},
{timestamps:true})


ProductModel  =  mongoose.model('product',  ProductSchema)

module.exports =  ProductModel      