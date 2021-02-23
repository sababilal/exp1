const Sequelize = require("sequelize");
require("../database/dbconfig");

const Event = sequelize.define(
    "event",
    {
        id: {
            type: Sequelize.BIGINT(20),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        code: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        venue: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        time: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        duration: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },

    {
        timestamps: false,
        tableName: "event",
    }
);
module.exports=Event;