const sequelize = require("./../database/connection");
const Sequelize = require("sequelize");
const Option = sequelize.define(
  "option",
  {
    id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    option: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING(500),
    },
    score: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "option",
  }
);
module.exports = Option;
