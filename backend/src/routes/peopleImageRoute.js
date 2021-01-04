const express = require("express")

const personImageRouter = express.Router();
const PersonImageController = require("../controllers/PersonImageController");



personImageRouter.post("/detail/:id/image", PersonImageController.store )
personImageRouter.put("/detail/:id/image", PersonImageController.edit )


module.exports = personImageRouter