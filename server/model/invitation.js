
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
        coach_user_id: {
            type: Sequelize.BIGINT(20),
            allowNull: false,
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        coupon_code: {
            type: Sequelize.STRING,
        },
        invitation_date: {
            type: Sequelize.DATE,
        },
        expiration_date: {
            type: Sequelize.DATE,
        },
        order_detail_id: {
            type: Sequelize.BIGINT(20),
            allowNull: false,
        },
        student_user_id: {
            type: Sequelize.BIGINT(20),
            allowNull: false,
        },
    },

    {
        timestamps: false,
        tableName: "invitation",
    }
);
module.exports=Invitation;