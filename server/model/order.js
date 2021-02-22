const sequelize = require("./../database/connection");
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
    user_id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    event_id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
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
