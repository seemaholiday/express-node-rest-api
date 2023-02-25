const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/university";
const app = express();
app.use(express.json());
mongoose.connect(url).then((res)=>{
    console.log("connected to database")

}).catch((err)=>{
    console.log("Some Issue while connected to database", err)
})

//Routes
const teacherRoute = require('./routes/teacher')
app.use('/teacher', teacherRoute)


app.listen(5000, ()=>{
    console.log("server started")
})