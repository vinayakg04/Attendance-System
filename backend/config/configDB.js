const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://attendance:attendance@cluster0.fyeipoi.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connected Succesfully")
    } catch (e) {
        console.log(e)

    }
}

module.exports = connectDB
