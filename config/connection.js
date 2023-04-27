const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//checks if the db url exists on heroku, if not runs the sql server on localhost
process.env.JAWSDB_URL ? sequelize = new Sequelize(process.env.JAWSDB_URL) :
sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
})

module.exports = sequelize;