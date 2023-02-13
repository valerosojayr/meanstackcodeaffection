const mongoose = require ("mongoose");
const bcrypt = require ("bcryptjs");


const userSchema = new mongoose.Schema({
 fullName:{type: String},
 email:{type: String},
 password:{type: String},
 saltSecret: String
});


// events, this function will be invoke before the save operation
userSchema.pre("save", function (next){
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(this.password, salt, (err, hash)=>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});





mongoose.model("User", userSchema);