const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyToken, verifyAndAdmin} = require('../middleware/verifyToken');

// Update User 
router.put("/", verifyToken ,userController.updateUser);
// Delete User 
router.delete("/", verifyToken ,userController.deleteUser);
// Get User 
router.get("/", verifyToken ,userController.getUser);
// Get Users 
router.get("/", verifyAndAdmin ,userController.getAllUsers);

module.exports = router