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
    },
    comments: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
          },
          text: {
            type: String,
            required: true
          },
          name: {
            type: String
          },
          date: {
            type: Date,
            default: Date.now
          }
        }
      ]
})

module.exports = Item = mongoose.model('item', ItemSchema);
