const Sequelize = require('sequelize');
const config = {};

if (process.env.QUIET) {
  config.logging = false;
}
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/nfl_sim',
  config
);

module.exports = db;
