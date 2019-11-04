const mongoose = require('mongoose');
const Post = require ('./Products')
Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', PostSchema);