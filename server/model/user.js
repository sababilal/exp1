const Sequelize = require("sequelize");
 require("../database/dbconfig");
const Cart= require("./cart");
const Courseprogress = require("./courseprogress");
const Discovery = require("./discovery");
const Invitation = require("./invitation");
const Order = require("./order");
const Payment = require("./payment");
const Event= require("./event");

const User = sequelize.define(  "user",
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


// Association Between User and Cart
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

  // Association Between User and course progress
User.hasMany(Courseprogress, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
    foreignKey: {
      name: "user_id",
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
  });
  
  Courseprogress.belongsTo(User, {
    foreignKey: {
      name: "user_id",
    },
  });

  // Association Between User and Discovery
  User.hasMany(Discovery, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
    foreignKey: {
      name: "user_id",
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
  });
  
  Discovery.belongsTo(User, {
    foreignKey: {
      name: "user_id",
    },
  });

   // Association Between User and Event
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
    // Association Between User and Invitation
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


         // Association Between User and Invitation
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


        // Association Between User and Order
    User.hasMany(Order, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
        foreignKey: {
          name: "user_id",
          type: Sequelize.BIGINT(20),
          allowNull: false,
        },
      });
      
      Order.belongsTo(User, {
        foreignKey: {
          name: "user_id",
        },
      });

        // Association Between User and Payment
    User.hasMany(Payment, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
        foreignKey: {
          name: "user_id",
          type: Sequelize.BIGINT(20),
          allowNull: false,
        },
      });
      
      Payment.belongsTo(User, {
        foreignKey: {
          name: "user_id",
        },
      });



module.exports=User;