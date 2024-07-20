const express = require('express');
const router = express.Router();
const routerLevelMiddleware = require('../middleware/routerLevel');

// ... Simplified data store
const blogs = [];

router.get('/', (req, res) => {
    res.json(blogs);
});

router.post('/', (req, res) => {
    // ... Logic to create a new blog object
    res.status(201).json(newBlog); 
});

// Router-level middleware applied to this route
router.get('/:authorId', routerLevelMiddleware, (req, res) => {
    const authorId = parseInt(req.params.authorId);
    // ... Logic to find blogs by authorId
    res.json(foundBlogs); 
});

module.exports = router;
