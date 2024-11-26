const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");
const Tutorial = require("../models/tutorial.model.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

Tutorial.tableCreate(null);

module.exports = connection;
