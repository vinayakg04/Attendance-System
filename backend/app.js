const express=require("express")
const bodyParser = require('body-parser');
const app=express()
const cookieParser=require("cookie-parser")
// const cors = require('cors');

// app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000', 
//     methods: 'GET,PUT,POST,DELETE',
//     allowedHeaders: 'Content-Type,Authorization'
//   }));
  
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))


 
// Import Admin Routes
const adminRoutes = require('./routes/adminRoutes');
//  Import Student Routes
const studentRoutes=require("./routes/studentRoutes")


// Use Admin Routes
app.use('/admin', adminRoutes);
//use student Routes
app.use('/student',studentRoutes)



module.exports=app