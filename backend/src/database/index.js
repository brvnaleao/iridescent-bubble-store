const Sequelize = require("sequelize")
const dbConfig = require("../config/database")
const PeopleImage = require("../models/PeopleImage")
const People = require("../models/People")

const connection = new Sequelize(dbConfig)

PeopleImage.init(connection)
People.init(connection)

People.associate(connection.models)
PeopleImage.associate(connection.models)


module.exports = connection