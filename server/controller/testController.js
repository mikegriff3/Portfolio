const circularJSON = require("circular-json");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  // getTeamContracts: (req, res) => {
  //   var team = req.query.team;
  //   console.log("TEAM:", team);
  //   db.Salaries.findAll({
  //     where: {
  //       team: team
  //     }
  //   })
  //     .then(data => {
  //       res.status(200).send(data);
  //       console.log("Successfully retrieved roster!!");
  //     })
  //     .catch(err => {
  //       res.status(500).send(err);
  //       console.log("ERROR RETREIVING ROSTER\n", err);
  //     });
  // },
};
