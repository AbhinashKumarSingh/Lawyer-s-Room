const mongoose=require("mongoose")

const lawyerSchema=new mongoose.Schema({
    name:{type:String ,required:true},
    email:{type:String ,required:true},
    mobileNo:{type:Number ,required:true},
    password:{type:String ,required:true},
    place:{type:String ,required:true},
    courtType:{type:String ,required:true},
    typeOfLawyer:{type:String,required:true}

})

const lawyerData=mongoose.model('lawyerData',lawyerSchema)
module.exports=lawyerData;