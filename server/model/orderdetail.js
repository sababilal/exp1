const sequelize = require("../database/dbconfig");
const Sequelize = require("sequelize");
const Orderdetail = sequelize.define(
  "order_detail",
  {
    id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    quantity: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    unit_price: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    currency: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "order_detail",
  }
);
module.exports = Orderdetail;
