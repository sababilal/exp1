const {Sequelize,DataTypes} = require('sequelize');
 require('../database/dbconfig.js');
 const Course=require('./course.js');

        const Coursecontent= sequelize.define('Course',{
        id:{
            type:DataTypes.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        content:{
            type: DataTypes.TEXT,
            allowNull:true
        }},{
        tableName:'course_content'
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
      

exports.Coursecontent=Coursecontent;