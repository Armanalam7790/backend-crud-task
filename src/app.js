const express = require('express')
const ProductModel = require('./models/productModel')
const app = express()
app.use(express.json())

app.post('/create-product', async (req, res) => {

    const { name, price, description, category, stock } = req.body
    if (!name || !price || !description || !category || !stock) {
     return   res.status(400).json({
            message: "all field required",

        })
    }
    console.log(req.body);

    let newProduct = await ProductModel.create({
        name,
        price,
        description,
        category,
        stock
    })

    return res.status(201).json({
        message: "product create",
        newProduct
    })

    

})


app.get('/product', async(req,res)=>{
  let alldata =  await  ProductModel.find()
 return  res.status(200).json({
    message:"all product feched data",
    alldata
  })
})


app.put('/prodct/update/:id', async(req,res)=>{
     const { name, price, description, category, stock } = req.body
    if (!name || !price || !description || !category || !stock) {
     return   res.status(400).json({
            message: "all field required",

        })
    }

    
const  {id} =  req.params
 let updatedProduct  = await ProductModel.findByIdAndUpdate(id, {name, price, description, category, stock},{ new:true})
return res.status(200).json({
    message:"update",
    updatedProduct
})
})


app.delete('/product/delete/:id', async (req, res) => {

    const { id } = req.params

    let deletedProduct = await ProductModel.findByIdAndDelete(id)

    return res.status(200).json({
        message: "product deleted",
        deletedProduct
    })

})


app.get('/product/:id', async (req, res) => {

    const { id } = req.params

    let product = await ProductModel.findById(id)

    return res.status(200).json({
        message: "single product fetched",
        product
    })

})
module.exports = app