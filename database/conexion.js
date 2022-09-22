const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("Conectado a la bd")).catch(err=>console.log(err))