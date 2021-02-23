const Sequelize = require("sequelize");
 require("../database/dbconfig");

const User = sequelize.define(
    "user",
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
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        mobile: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        is_student: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        is_coach: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        is_admin: {
            type: Sequelize.STRING,
        },
        linkedin: {
            type: Sequelize.STRING,
        },
        url: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        city: {
            type: Sequelize.STRING,
        },
        state: {
            type: Sequelize.STRING,
        },
        pincode: {
            type: Sequelize.STRING,
        },
        registration_date: {
            type: Sequelize.DATE,
        },
        active: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        activation_code: {
            type: Sequelize.STRING,
        },
    },

    {
        timestamps: false,
        tableName: "user",
    }
);
module.exports=User;