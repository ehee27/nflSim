const {
  UUID,
  UUIDV4,
  STRING,
  INTEGER,
  FLOAT,
  ARRAY,
  BOOLEAN,
} = require('sequelize');
const db = require('./conn');

const Team = db.define('team', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
  },
  division: {
    type: STRING,
  },
  seasons: {
    type: STRING(1000),
    // allowNull: false,
    get() {
      return JSON.parse(this.getDataValue('seasons'));
    },
    set(val) {
      return this.setDataValue('seasons', JSON.stringify(val));
    },
  },
  coaching: {
    type: INTEGER,
  },
  teamLogo: {
    type: STRING,
    defaultValue: 'nfl-logo.png',
  },
  checked: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Team;

// const Team = db.define('team', {
//   id: {
//     type: UUID,
//     primaryKey: true,
//     defaultValue: UUIDV4,
//   },
//   name: {
//     type: STRING,
//   },
//   divisionName: {
//     type: STRING,
//   },
//   totalYdsPassing: {
//     type: INTEGER,
//   },
//   totalYdsRushing: {
//     type: INTEGER,
//   },
//   totalYdsOffense: {
//     type: INTEGER,
//   },
//   // divisionId: {
//   //   type: UUID,
//   //   allowNull: false,
//   // },
// });
