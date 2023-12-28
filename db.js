const mongoose=require("mongoose");
var mongoURL='mongodb+srv://piserlasrinivas2201:reddy123@cluster0.s9ff1t2.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var connection=mongoose.connection

connection.on('error',()=>{
console.log('mongodb connection failed')
})

connection.on('connected',()=>{
    console.log('mongodb connection successful')
})


module.exports=mongoose

