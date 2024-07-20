// app.js or server.js
require('dotenv').config();
console.log(process.env.MONGODB_URI);

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const search = require('./routes/search');

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.use('/search',search);

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
