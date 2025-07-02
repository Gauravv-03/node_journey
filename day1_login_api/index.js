const express= require('express');
const app=express();
const PORT=5000;

app.use(express.json());

const user= {
    email:'gauravpandey0100@gmail.com',
    password: '123456'
};

app.post('/login',(req,res)=>{
    const {email, password}=req.body;
    if(email===user.email && password===user.password)
    {
        res.status(200).json({message:'login successsfully'});

    }
    else{        res.status(401).json({message:'invalid password / credential'});
    }
});


app.listen(PORT,()=>
{
    console.log(`server running on the port http://localhost:${PORT}`);
})

