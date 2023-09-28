const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must have more than 2 chars"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [5, "Price must be more than 4 dollars"]
    },
    offer: {
        type: Number,
        required: [true, "Offer is required"],
        min: [5, "Price must be more than 4 dollars"]
    },
    sold: {
        type: Boolean,
        required: [true, "Sold is required"],
    }
}, {timestamps: true})

const House = mongoose.model('House', HouseSchema)
module.exports = House