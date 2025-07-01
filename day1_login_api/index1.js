const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
const app=express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("mongodb connected successsfully");
}).catch(err=>{
    console.error(err);
})

app.use('/api/auth', authRoutes);
app.listen(process.env.PORT ,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`);

})