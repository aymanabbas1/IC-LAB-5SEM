// middleware/routerLevel.js

module.exports = function (req, res, next) {
    const authorId = parseInt(req.params.authorId);

    // 1. Validation
    if (isNaN(authorId)) {
        return res.status(400).json({ error: 'Author ID must be a number' });
    } 

    // 2. Author Existence Check
    const authorExists = authors.some(author => author.id === authorId); 

    if (!authorExists) {
        return res.status(404).json({ error: 'Author not found' });
    }

    next(); // Proceed to the route handler
};
