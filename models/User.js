const mongoose = require("mongoose");  // create instance for a database

const UserSchema = new mongoose.Schema({
    username : {type:String, required:true, unique:true},
    email : {type:String, required:true, unique:true},
    password : {type:String, required:true},
    location : {type:String, required:false},
    isAdmin : {type:Boolean, default:false},
    isAgent : {type:Boolean, default:false},
    skills : {type:Array, default:false},
    profile : {
        type:String, 
        required:true,
        default:'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png'
    },
}, {timestamps: true});
module.exports = mongoose.model('User',UserSchema);
