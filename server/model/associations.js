const { Sequelize } = require("sequelize");
const Coursecontent = require("./coursecontent.js");
const Course = require("./course.js");
const Courseprogress = require("./courseprogress.js");
const Discovery = require("./discovery.js");
const Discoveryanswer = require("./discoveryanswer.js");
const Question = require("./question.js");
const Option = require("./option.js");
// One to Many relationship between Course and Coursecontent
Course.hasMany(Coursecontent, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "course_id",
    type: Sequelize.BIGINT,
    allowNull: false,
  },
});

Coursecontent.belongsTo(Course, {
  foreignKey: {
    name: "course_id",
  },
});

// One to Many relationship between Course and Discovery

Course.hasMany(Discovery, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "course_id",
    type: Sequelize.BIGINT,
    allowNull: false,
  },
});

Discovery.belongsTo(Course, {
  foreignKey: {
    name: "course_id",
  },
});

// One to Many relationship between Coursecontent and Courseprogress

Coursecontent.hasMany(Courseprogress, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "course_content_id",
    type: Sequelize.BIGINT,
    allowNull: false,
  },
});

Courseprogress.belongsTo(Coursecontent, {
  foreignKey: {
    name: "course_content_id",
  },
});

// One to Many relationship between Discovery and Discoveryanswer

Discovery.hasMany(Discoveryanswer, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "discovery_id",
    type: Sequelize.BIGINT,
    allowNull: false,
  },
});

Discoveryanswer.belongsTo(Discovery, {
  foreignKey: {
    name: "discovery_id",
  },
});

//Association between table Question and table Option
Question.hasMany(Option, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "question_id",
    type: DataTypes.BIGINT(20),
    allowNull: false,
  },
});
Option.belongsTo(Question, {
  foreignKey: {
    name: "question_id",
  },
});

//Association between table Course and table Question
Course.hasMany(Question, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "course_id",
    type: DataTypes.BIGINT(20),
    allowNull: false,
  },
});
Question.belongsTo(Course, {
  foreignKey: {
    name: "course_id",
  },
});
