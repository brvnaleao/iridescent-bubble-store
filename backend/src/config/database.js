const e = require("express")

const env = require("dotenv").config().parsed

module.exports = {
    dialect: "postgres",
    host: env.HOST,
    username: env.USER,
    password: env.PASSWORD,
    database: env.DB,
    define: {
        timestamps: true,   
   
 
    }

}