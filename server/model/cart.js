const Sequelize = require("sequelize");
require("../database/dbconfig");

const Cart= sequelize.define(
    "cart",
    {
        id: {
            type: Sequelize.BIGINT(20),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        date_added: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        quantity: {
            type: Sequelize.BIGINT(20),
            allowNull: false,
        },
    },
    
    {
        timestamps: false,
        tableName: "cart",
    }
);
module.exports=Cart;