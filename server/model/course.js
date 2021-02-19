const {Sequelize,DataTypes} = require('sequelize');
require('../database/dbconfig.js');
const Coursecontent=require('./coursecontent.js');

        const Course= sequelize.define('Course',{
        id:{
            type:DataTypes.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        name :{
        type: DataTypes.STRING,
        allowNull:false
        },
        description:{
            type: DataTypes.STRING,
            allowNull:true
        },
        price :{
            type: DataTypes.BIGINT,
            allowNull:false    
        },
        currency :{
            type:DataTypes.STRING,
            allowNull:true
        }},{
        tableName:'course'
         }, {
        timestamps: false
        });

         Course.hasMany(Coursecontent,{
             onDelete : "RESTRICT",
             onUpdate : "RESTRICT",
             foreignKey:{
                 name:"course_id",
                 type:DataTypes.BIGINT,
                 allowNull:false,
             },
         });
      
         Coursecontent.belongsTo(Course,{
            foreignKey:{
                name : "course_id",
            },
        });

exports.Course=Course;