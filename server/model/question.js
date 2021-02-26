 require("../database/dbconfig");
const Sequelize = require("sequelize");
const Discoveryanswer = require("./discoveryanswer");
const Option =require("./option");
const Question = sequelize.define( "question",
  {
    id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "question",
  }
);
//Association between table Question and table Discovery answer
Question.hasMany(Discoveryanswer, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "question_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});
Discoveryanswer.belongsTo(Question, {
  foreignKey: {
    name: "question_id",
  },
});

//Association between table Question and table Option
Question.hasMany(Option, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "question_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});
Option.belongsTo(Question, {
  foreignKey: {
    name: "question_id",
  },
});


module.exports = Question;
