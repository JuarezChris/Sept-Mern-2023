const express = require("express");
const app = express();

require('dotenv').config()
require("./config/config.mongoose");

app.use(express.json(), express.urlencoded({ extended: true }));

const userRoutes = require("./routes/user.routes");
userRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));