const express = require( "express");
const Connection = require( "./database/db");

const dotenv = require('dotenv');
const app=express();

const Defaultdata=require("./default.js")

console.log(Defaultdata)

dotenv.config();

const PORT=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(PORT,()=>console.log(`server is running successfully on PORT ${PORT} hell`));

Defaultdata();