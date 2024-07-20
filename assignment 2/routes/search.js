const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost'); // Assuming you have a BlogPost model

// Define a route for search functionality
router.get('/', async (req, res) => {
    try {
        const searchTerm = req.query.q; // Get the search term from the query parameters
        // Query the database for blog post titles matching the entered letter
        const searchResults = await BlogPost.find({ title: { $regex: new RegExp(searchTerm, 'i') } });
        // Return the relevant recommendations as a response
        res.json(searchResults);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Export the router
module.exports = router;