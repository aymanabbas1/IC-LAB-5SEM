// middleware/appLevel.js

module.exports = function (req, res, next) {
    // 1. Logging:
    console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  
    // 2. Example of modifying the request object:
    req.requestTime = Date.now();
  
    // 3. CORS (Cross-Origin Resource Sharing) - simplified example
    res.header('Access-Control-Allow-Origin', '*'); // Adjust origin for production
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  
    // Important: Call next() to pass control to the next middleware/route handler
    next(); 
  };
  