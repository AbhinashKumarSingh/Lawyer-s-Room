const express=require("express");
const bodyParser=require("body-parser")
const app=express();
const cors=require("cors")
const router=require("./routes/index")
require("./db")
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use("/api",router)
app.post('/api/client/register',(req,res)=>{
    console.log(req.body);
    return res.send({message:"hy"})
})

app.listen(5000,()=>{
    console.log("server running")
})