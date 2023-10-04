const HouseController = require('../controllers/house.controller');

//DECLARE ROUTES
module.exports = (app) => {
    app.get('/api/allHouses', HouseController.allMyHouses);
    app.post('/api/newHouse', HouseController.createHouse);
    app.get('/api/oneHouse/:id', HouseController.findOneHouse);
    app.patch('/api/updateHouse/:id', HouseController.updateHouse)
    app.delete('/api/deleteHouse/:id', HouseController.deleteHouse)
}