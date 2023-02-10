// require("dotenv").config(); //import variables from .env

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     //sets up connection to database using sequelize
//     host: "localhost",
//     dialect: "mysql",
//     dialectOptions: {
//       decimalNumbers: true,
//     },
//   }
// );

// module.exports = sequelize; //export it to use in server.js

//probably to be deleted:
// process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
