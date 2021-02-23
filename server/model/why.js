const Sequelize = require("sequelize");
 require("../database/dbconfig");

const Why=sequelize.define(
    "why",
    {
        id: {
            type: Sequelize.BIGINT(20),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        code: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,    
            allowNull: false,    
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        resource_link: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
    },
    
    {
        timestamps: false,
        tableName: "why",
    }
);
module.exports=Why;