const mongoose = require("mongoose")


const connectDB = async() =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = connectDB;