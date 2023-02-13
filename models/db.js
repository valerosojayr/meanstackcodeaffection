const mongoose = require ("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect (process.env.MONGODB_URI, (err)=>{
 if (!err){console.log("MongoDb Connection Succeeded.")}
 else{console.log ("Error in MongoDB Connection" + JSON.stringify(err, undefined, 2))}
});





require("./user.model");