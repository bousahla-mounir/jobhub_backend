const mongoose = require("mongoose");  // create instance for a database

const BookMarkSchema = new mongoose.Schema({
    job : {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Job"
    },
    userId : {type:String, required:true,},
   
}, {timestamps: true});
module.exports = mongoose.model('Bookmark',BookMarkSchema);
