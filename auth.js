const jwt=require('jsonwebtoken');
const express=require('express');
const router=express.Router();
const bcrypt=require("bcryptjs");
const authenticate=require('../middleware/authenticate');

require('../db/conn');

const User=require('../model/userSchema');

router.get('/',(req,res)=>
{
res.send(`hello deepak router`);
})

// router.post('/register',async(req,res)=>
// {
//     const {name,email,phone,work,password,cpassword}=req.body;

// //res.send("rgistration page...");
// //res.json({message:req.body});
// // console.log(name);
// // console.log(email);
// if(!name || !email || !phone || !work || !password || !cpassword)
// {
//     return res.status(422).json({error:"plz fill the form first"});
// }
// User.findOne({email:email}).then((userExist)=>
// {
//     if(userExist)
//     {
//         return res.status(422).json({error:"Email already exist"});
//     }
//     const user=new User({name,email,phone,work,password,cpassword});
//     user.save().then(()=>
//     {
//         res.status(422).json({message:"user register successfull"})
//     }).catch((err)=>res.status(422).json({error:"Fail to register"}));
// }).catch(err=>{console.log(err);});
// });

router.post('/register',async(req,res)=>
{
const {name,email,phone,work,password,cpassword}=req.body;

if(!name || !email || !phone || !work || !password || !cpassword)
{
    return res.status(422).json({error:"plz fill the form first"});
}
try
{
const userExist=await User.findOne({email:email});
    if(userExist)
    {
        return res.status(422).json({error:"Email already exist"});
    }
    else if(password!==cpassword)
    {
        return res.status(422).json({error:"password are not"});
    }
    else
    {
    const user=new User({name,email,phone,work,password,cpassword});

    const userRegister=await user.save();
    console.log(`${user}user Registered successfully`)
    console.log(userRegister);
     res.status(422).json({message:"user register successfull"})
    
}}
catch(err)
{
    console.log(err);
}
});
//login route
router.post('/signin',async(req,res)=>
{
    // console.log(req.body);
    // res.json({message:"login"})
    let token;
    try
    {
        const{email,password}=req.body;
        if(!email || !password)
        {
            return res.status(422).json({error:"Plz filled the data"})
        }
        const userLogin=await User.findOne({email:email});
        console.log(userLogin);

        if(userLogin)
        {
            const isMatch=await bcrypt.compare(password,userLogin.password);

            token=await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken",token,{expires:new Date(Date.now()+25892000000),httpOnly:true
            });
            if(!isMatch)
            {
                res.status(400).json({error:"Invalid Credientials pass"});
            }
            else
            {
                res.json({message:"user Signin Successfully"});
            }
        //res.json({error:"user signin not successfully"});
        }
        else
        {
            res.status(400).json({error:"Invalid Credientials"}); 
        }
    }
    catch(err)
    {
console.log(err);
    }
    
})
//about us ka page
router.get('/about',authenticate,(req,res)=>
{
    console.log("hello about from router");
    res.send(req.rootUser);

})

//logout
router.get('/logout',(req,res)=>
{
    console.log("hello logout from router");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("user logout");

})
module.exports=router;