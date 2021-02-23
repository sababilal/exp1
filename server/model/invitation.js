
const Sequelize = require("sequelize");
require("../database/dbconfig");

const Invitation = sequelize.define(
    "invitation",
    {
        id: {
            type: Sequelize.BIGINT(20),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        coupon_code: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        invitation_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        expiration_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },

    {
        timestamps: false,
        tableName: "invitation",
    }
);
module.exports=Invitation;