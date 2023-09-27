const HouseController = require('../controllers/house.controller');

module.exports = (app) => {
    app.get('/api/getAll', HouseController.allMyHouses)
}