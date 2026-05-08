const { default: mongoose } = require("mongoose")

const connectDB  = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://product:product12345@cluster1.s4fmcxf.mongodb.net/')
        console.log('mongodb connected');
        
    } catch (error) {
        console.log(error , 'mongodb connection failed');
        
    }
}

module.exports =  connectDB