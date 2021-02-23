const sequelize = require("../database/dbconfig");
const Sequelize = require("sequelize");
const Question = sequelize.define(
  "question",
  {
    id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "question",
  }
);
module.exports = Question;
