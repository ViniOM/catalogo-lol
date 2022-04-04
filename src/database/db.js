const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const connect = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

module.exports = connect;
