const sequelize = require("../database/dbconfig");
const Sequelize = require("sequelize");
const Discoveryanswer = require("./discoveryanswer");
const Option = sequelize.define( "option",
  {
    id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    option: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING(500),
    },
    score: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "option",
  }
);

//Association between table Option and table Discoveryanswer
Option.hasMany(Discoveryanswer, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "option_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});
Discoveryanswer.belongsTo(Option, {
  foreignKey: {
    name: "option_id",
  },
});

module.exports = Option;
