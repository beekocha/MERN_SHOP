const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    section: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    pic: {
        type: String,
        required: true
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);
