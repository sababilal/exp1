require("../database/dbconfig");
const Sequelize = require("sequelize");
const Orderdetail= require("./orderdetail");
const Payment= require("./payment");
const Order = sequelize.define("order",
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

//Association between table Order and table Order_detail
Order.hasMany(Orderdetail, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "order_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});
Orderdetail.belongsTo(Order, {
  foreignKey: {
    name: "order_id",
  },
});


//Association between table Order and table Payment
Order.hasMany(Payment, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "order_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});
Payment.belongsTo(Order, {
  foreignKey: {
    name: "order_id",
  },
});

module.exports = Order;
