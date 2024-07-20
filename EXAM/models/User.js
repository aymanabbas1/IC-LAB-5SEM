const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    name: String,
    roles: [String] // Admin, Super User, User
    // other fields as required
});
const User = mongoose.model('User', userSchema);
module.exports = User;
