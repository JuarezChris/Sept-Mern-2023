const House = require("../models/house.model")

module.exports = {
    allMyHouses: (req, res) => {
        // res.json({message: "Hello"})
        House.find({})
            .then((houses) => {
                // RES.JSON(HOUSES) SEND BACK TO PLACE OF EXECUTION
                res.json(houses)
            })
            .catch(err => {
                res.json({message: 'Something went wrong in find all controllers', error: err})
            })
    },
    createHouse: (req, res) => {
        House.create(req.body)
            .then(newlyCreatedHouse => {
                res.json({ house: newlyCreatedHouse})
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong in create controllers', error: err})
            })

    },
    findOneHouse: (req, res) => {
        House.findOne({ _id: req.params.id })
            .then(oneSingleHouse => {
                res.json({ house: oneSingleHouse})
            })
            .catch(err => {
                res.json({message: 'Something went wrong in find one controllers', error: err})
            })
    },
    updateHouse: (req, res) => {
        House.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body,
            {new: true, runValidators: true}
            )
            .then(updateHouse => {
                res.status(200).json({ house: updateHouse})
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong in update controllers', error: err})
            })
    },
    deleteHouse: (req, res) => {
        House.deleteOne({ _id: req.params.id })
            .then(deleted => {
                res.json(deleted)
            })
            .catch(err => {
                res.json({message: 'Something went wrong in delete controllers', error: err})
            })
    }
}
