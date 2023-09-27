const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    offer: {
        type: Number
    },
    sold: {
        type: Boolean
    }
}, {timestamps: true})

const House = mongoose.model('House', HouseSchema)
module.exports = House