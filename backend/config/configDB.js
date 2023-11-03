const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected Succesfully")
    } catch (e) {
        console.log(e)

    }
}

module.exports = connectDB
