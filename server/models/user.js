var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    display_name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    broadcaster_type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    profile_image_url: {
        type: String,
        required: true
    },
    offline_image_url: {
        type: String,
        required: true
    },
    view_count: {
        type: int,
        required: true
    },
    email: {
        type: String,
        required: false
    }
});

// Create a model from the schema
var User = mongoose.model('User', userSchema);

// Exports it to be available in all the application
module.exports = User;