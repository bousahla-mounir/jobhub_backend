const Bookmark = require("../models/Bookmark");
const Job = require("../models/Job");

module.exports = {
    createBookmark: async (req, res) => {
        const jobID = req.body.job;
        try{
            const job = await Job.findById(jobID);
            if(!job){
                return res.status(404).json({error:"job not found"});
            }
            const newBook = new Bookmark({job:job, userId:req.user.id});
            const savedBookmark = await newBook.save();
            const {__v, createdAt, updatedAt, ...bookmarkInfo} = savedBookmark._doc;
            res.status(200).json(bookmarkInfo);
        }catch(error){
            res.status(500).json(error);
        }
    },
    deleteBookmark: async (req, res) => {
        try{
            const userId = req.user.id;
            const jobId = req.params.id;
            await Bookmark.findOneAndDelete({userId, job:jobId});
            res.status(200).json('Bookmark Successfully Deleted');
        }catch(error){
            res.status(500).json(error);
        }
    },
    getBookmarks: async (req, res) => {
        try{
            const bookmarks = await Bookmark.find({userId : req.user.id}).populate('job');
            res.status(200).json(bookmarks);
        }catch(error){
            res.status(500).json(error);
        }
    },

}