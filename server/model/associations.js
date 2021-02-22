const { Sequelize } = require("sequelize");
const Coursecontent = require("./coursecontent.js");
const Course = require("./course.js");
const Courseprogress = require("./courseprogress.js");
const Discovery = require("./discovery.js");
const Discoveryanswer = require("./discoveryanswer.js");
const Question = require("./question.js");
const Option = require("./option.js");
const Order = require("./order.js"); 
const Order_detail = require("./orderdetail.js");
const Payment = require("./payment.js");
const Event = require("./event.js");
const User = require("./User.js");


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

//Association between table Order and table Order_detail
Order.hasMany(Order_detail, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "order_id",
    type: DataTypes.BIGINT(20),
    allowNull: false,
  },
});
Order_detail.belongsTo(Order, {
  foreignKey: {
    name: "order_id",
  },
});

//Association between table Course and table Order_detail
Course.hasMany(Order_detail, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "course_id",
    type: DataTypes.BIGINT(20),
    allowNull: false,
  },
});
Order_detail.belongsTo(Course, {
  foreignKey: {
    name: "course_id",
  },
});

//Association between table Order and table Payment
Order.hasOne(Payment, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "order_id",
    type: DataTypes.BIGINT(20),
    allowNull: false,
  },
});
Payment.belongsTo(Order, {
  foreignKey: {
    name: "order_id",
  },
});









// Association Between EVENT Table and USER Table 
User.hasMany(Event, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "coach_user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Event.belongsTo(User, {
  foreignKey: {
    name: "coach_user_id",
  },
});

// Association Between EVENT Table and COURSE Table 
Course.hasMany(Event, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "course_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Event.belongsTo(User, {
  foreignKey: {
    name: "course_id",
  },
});



// Association Between CART Table and USER Table  
User.hasMany(Cart, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Cart.belongsTo(User, {
  foreignKey: {
    name: "user_id",
  },
});

// Association Between CART Table and COURSE Table 
Course.hasMany(Cart, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "course_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Cart.belongsTo(Course, {
  foreignKey: {
    name: "course_id",
  },
});


// Association Between INVITATION Table and USER Table
User.hasMany(Invitation, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "coach_user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Invitation.belongsTo(User, {
  foreignKey: {
    name: "coach_user_id",
  },
});

// Association Between INVITATION Table and USER Table
User.hasMany(Invitation, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "student_user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Invitation.belongsTo(User, {
  foreignKey: {
    name: "student_user_id",
  },
});



// Association Between INVITATION Table and ORDER_DETAIL Table
Order_Detail.hasMany(Invitation, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "order_detail_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Invitation.belongsTo(Order_Detail, {
  foreignKey: {
    name: "order_detail_id",
  },
});