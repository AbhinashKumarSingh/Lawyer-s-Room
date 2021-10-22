const express=require("express");
const router=express.Router();
const bcrypt=require("bcryptjs")
const clientData=require("../models/clientModel");
const lawyerData = require("../models/lawyerModel");

router.post("/client/register",async(req,res)=>{
    //console.log(typeof(req.body.password))
    const {name,email,mobileNo,password,rePassword}=req.body
    

    if(!name || !email || !mobileNo || !password || !rePassword)
    {
        return res.send("Please Fill All Fields")
    }
    try{
        //console.log("0")
        const client=await clientData.findOne({email:email});
    if(!client){
        //console.log(client)
        if(rePassword===password)
        {
               const hashedPassword= await bcrypt.hash(password,10);
               //console.log(hashedPassword)
               const user= new clientData({name:name,email:email,mobileNo:mobileNo,password:hashedPassword});
                const userSignUp=await user.save()
                if(userSignUp){
                    const result={message:"user registered successfully"
                }
            return result;}
                    else{
                        const result={message:"failed to registered",
                    }
                    return result;
                    }
        }
        else{
            return res.send("Password don't match")
        }
    }
    else {
        return res.send("email already exist")
    }
    //return res.send("hello")
}
catch(error){
    return res.send(error.message)
}
});

router.post("/lawyer/register",async(req,res)=>{
    console.log(req.body)
    const {
        name,
        email,
        mobileNo,
        password,
        rePassword,
        place,
        court,
        typeOfLawyer
      }=req.body;
      if(!name || !email || !mobileNo || !password || !rePassword || !place || !court || !typeOfLawyer)
    {
        return res.send("Please Fill All Fields")
    }
    try{
        //console.log("0")
        const lawyer=await lawyerData.findOne({email:email});
    if(!lawyer){
        //console.log(client)
        if(rePassword===password)
        {
               const hashedPassword= await bcrypt.hash(password,10);
               //console.log(hashedPassword)
               const user= new lawyerData({name:name,email:email,mobileNo:mobileNo,password:hashedPassword,place:place,courtType:court,typeOfLawyer:typeOfLawyer});
                const userSignUp=await user.save()
                if(userSignUp){
                    const result={message:"user registered successfully"
                }
            return result;}
                    else{
                        const result={message:"failed to registered",
                    }
                    return result;
                    }
        }
        else{
            return res.send("Password don't match")
        }
    }
    else {
        return res.send("email already exist")
    }
    //return res.send("hello")
}
catch(error){
    return res.send(error.message)
}
})

router.post("/client/signin",async(req,res)=>{
    console.log(req.body)
    const {email,password}=req.body;
    if(!email || !password){
        return res.send("Please Fill All Fields")
    }

    const result=await clientData.findOne({email:email});
    if(result)
    {
        const data=await bcrypt.compare(password,result.password);
        console.log(data)
        if(data){
            return res.send('User registered successfully');

        }
        else{
            return res.send("Invalid Data 1")
        }
    }
    else {
        return res.send("Invalid Credentials")
    }
})

router.post("/lawyer/signin",async(req,res)=>{
    console.log(req.body)
    const {email,password}=req.body;
    if(!email || !password){
        return res.send("Please Fill All Fields")
    }

    const result=await lawyerData.findOne({email:email});
    if(result)
    {
        const data=await bcrypt.compare(password,result.password);
        console.log(data)
        if(data){
            return res.send('User registered successfully');

        }
        else{
            return res.send("Invalid Data 1")
        }
    }
    else {
        return res.send("Invalid Credentials")
    }
})


module.exports= router;