const Sequelize = require("sequelize");
 require("../database/dbconfig");
const Discovery = require("./discovery.js");


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

// One to Many relationship between  Why and Discovery
Why.hasMany(Discovery, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
    foreignKey: {
      name: "why_id",
      type: Sequelize.BIGINT,
      allowNull: false,
    },
  });
  
  Discovery.belongsTo(Why, {
    foreignKey: {
      name: "why_id",
    },
  });

module.exports=Why;