
const dotenv=require('dotenv'); 
const mongoose=require('mongoose');
const express=require('express');
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());

//const User=require('./model/userSchema');
app.use(require('./router/auth'));

const PORT=process.env.PORT;



// const middleware=(req,res,next)=>
// {
//     console.log(`hello middleware`);
//     next();
// }

app.get('/',(req,res)=>
{
res.send(`hello deepak`);
})
// app.get('/about',(req,res)=>
// {
// res.send(`hello about`);
// })
app.get('/contact',(req,res)=>
{
res.send(`hello contact`);
})
app.get('/signin',(req,res)=>
{
res.send(`hello singin`);
})
app.get('/signup',(req,res)=>
{
res.send(`hello singup`);
})
app.listen(PORT,()=>
{
    console.log(`server is running at port no ${PORT}`);
})