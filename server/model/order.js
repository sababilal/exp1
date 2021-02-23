const sequelize = require("../database/dbconfig");
const Sequelize = require("sequelize");
const Order = sequelize.define(
  "order",
  {
    id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    order_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "order",
  }
);
module.exports = Order;
