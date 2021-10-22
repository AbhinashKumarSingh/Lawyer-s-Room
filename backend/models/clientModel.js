const mongoose=require("mongoose")

const clientSchema=new mongoose.Schema({
    name:{type:String ,required:true},
    email:{type:String ,required:true},
    mobileNo:{type:Number ,required:true},
    password:{type:String ,required:true}

})

const clientData=mongoose.model('clientData',clientSchema)
module.exports=clientData;