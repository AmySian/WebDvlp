const mongoose = require('mongoose');
const Post = require ('./Products')
Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    product_list: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Products'
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', PostSchema);