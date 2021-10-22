const mongoose=require("mongoose")
mongodbUrl= 'mongodb://localhost/lawyer',
mongoose.connect(mongodbUrl,{
    useNewUrlParser:true
}).then(data=>console.log('database connected'))
.catch (error=>console.log(error.reason));