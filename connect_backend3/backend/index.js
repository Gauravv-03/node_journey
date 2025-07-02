import express from "express";
const app=express();
 const PORT=4000;
app.get('/',(req,res)=>{
    res.send('Server is ready');

});


app.get('/home',(req,res)=>{
    const obarr=[
        {
            id:1,
            title:'this is para 1',
            content:'this is content 1'
        },
        {
            id:2,
            title:'this is para 2',
            content:'this is content 2'
        },
        {
            id:3,
            title:'this is para 3',
            content:'this is conteent 3'
        }
    ];
    res.send(obarr);
});

app.listen(PORT ,()=>{
    console.log(`port is running on http://localhost:${PORT}`);
})