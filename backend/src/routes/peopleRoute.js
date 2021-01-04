const express = require("express")
const PersonController = require("../controllers/PeopleController");


const personRoute = express.Router();


personRoute.get("/employee/:id", PersonController.getOne)
personRoute.get("/list", PersonController.list)

personRoute.post("/create", PersonController.store)


personRoute.put("/edit/:id", PersonController.edit)

personRoute.delete("/delete/:id", PersonController.delete)

module.exports = personRoute