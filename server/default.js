
// import { products } from "./contants/data";
const products=require("./contants/data.js")
const Product=require("./model/product-scheme.js")
// import Product from "./model/product-scheme.js"

const Defaultdata=()=>{
    try{
        Product.insertMany(products);

        console.log("Data imported Successfully")

    }catch(error){
        console.log("Error while inserting default data",error.message);
    }
}
module.exports=Defaultdata;