const router = require("express").Router();
const bookmarkController = require("../controllers/bookmarkController");
const { verifyToken } = require("../middleware/verifyToken");


// CREATE BOOKMARKS
router.post("/",verifyToken, bookmarkController.createBookmark);


// DELETE BOOKMARKS
router.delete("/:id", bookmarkController.deleteBookmark);


// GET BOOKMARKS
router.get("/", verifyToken, bookmarkController.getBookmarks);



module.exports = router