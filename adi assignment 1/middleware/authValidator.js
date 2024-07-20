// middleware/authValidator.js

module.exports = function (req, res, next) {
    // 1. Extract credentials
    const username = req.body.username;
    const password = req.body.password;

    // 2. Basic Validation
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }

    // 3. In a real app, you'd check credentials against a database or secure store.
    //    Here, we'll use the simplified 'authors' array from the auth routes 
    const existingAuthor = authors.find(author => author.username === username);

    if (!existingAuthor || existingAuthor.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // 4. If valid, you might attach user data to the request object:
    req.user = existingAuthor; 

    next(); // Proceed to the next middleware/route handler
};
