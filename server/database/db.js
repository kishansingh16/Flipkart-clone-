const mongoose = require("mongoose");



const Connection=async(username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@ecommerce-clone.hxmhngc.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{ useUnifiedTopology:true, useNewUrlParser:true});
       console.log("Database connected Successfully");
    }catch(error){
        console.log("error while connecting",error.message);
    }
}

module.exports = Connection;