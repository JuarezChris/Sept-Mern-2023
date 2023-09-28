const House = require("../models/house.model")

module.exports = {
    allMyHouses: (req, res) => {
        // res.json({message: "Hello"})
        House.find({})
            .then((houses) => {
                res.json(house)
            })
            .catch(err => {
                res.json({message: 'Something went wrong in find all controllers', error: err})
            })
    },
}
