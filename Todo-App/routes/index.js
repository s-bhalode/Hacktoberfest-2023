
// Import express
const express = require('express');

// Import home controller
const homeController = require("../controllers/home_controller")

// create router
const router = express.Router();

console.log("router loaded");

// home page route
router.get('/', homeController.home);

// Create  route
router.post('/create-task', homeController.create);

// Delete multiple  route
router.post('/delete-task', homeController.deleteSelected);

// Delete Single
router.get('/delete-task/:id', homeController.delete);

// Export router to use further anywhere in the whole program
module.exports = router;