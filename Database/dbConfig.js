const mongoose = require("mongoose")
const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGO_URI
const connectDB = async() =>{
    try {
        mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then(con=>{
            console.log(`mongoDB is connected to the host ${con.connection.host}`);
        })
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = connectDB;