const mongoose = require('mongoose');

Schema = mongoose.Schema;

/*
 * Product Schema
 */

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    promotion: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Products', ProductSchema);