require('dotenv').config();
const express=require('express');
const app=express();
// const PORT=4000;
app.get('/',(req,res)=>{
    res.send('this is Home Page');
});
app.get('/login',(req,res)=>{
    res.send('this is Login Page');
});


app.get('/uk',(req,res)=>{
    res.send('<h1>WElcome to Uttrakhand');
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})