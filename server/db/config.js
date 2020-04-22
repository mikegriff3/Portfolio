const Sequelize = require("sequelize");

// AMAZON
// const bbscoutdb = new Sequelize(
//   "postgres://griff:temecula1@bbscoutdb.cpbianqr35ok.us-west-1.rds.amazonaws.com:5432/bbscoutdb",
//   {
//     dialect: "postgres",
//     pool: {
//       min: 0,
//       idle: 1000
//     },
//     logging: false
//   }
// );

// bbscoutdb
//   .authenticate()
//   .then(() => console.log("connected to db"))
//   .catch(err => console.log("FAILED TO CONNECT TO DB", err));

// ELEPHANTSQL
// const db = new Sequelize(
//   "postgres://cbncypxc:GWEic6mmnNU5q46ZOO2z1djA4RGwz4aN@baasu.db.elephantsql.com:5432/cbncypxc",
//   {
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       idle: 20000,
//       acquire: 20000,
//       evict: 20000
//     }
//   }
// );

module.exports = {
  //bbscoutdb,
  //db
};
