const express = require('express');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blogs');
const appLevelMiddleware = require('./middleware/appLevel');

const app = express();

// Built-in middleware
app.use(express.json());  

// Application-level middleware
app.use(appLevelMiddleware);

// Routes
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes); 

// ... (Error handling would go here)

app.listen(3000, () => console.log('Server listening on port 3000'));
