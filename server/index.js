const express = require('express')
const app = express();
const cors = require('cors');
const User = require('./models/user.model')
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/FullStack_Todo_App')


app.post("/api/register", async (req, res)=> {
    console.log(req.body)
   try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok'})
   }
   catch(err){
        res.json({ status: 'error' })
   } 
})







app.listen(3005, ()=>{
    console.log("server started at PORT 3005")
})