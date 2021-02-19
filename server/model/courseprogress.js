const {Sequelize,DataTypes} = require('sequelize');
 require('../../dbconfig/dbconnect.js');

const discoveryModel=()=>{

        const Course= sequelize.define('Course',{
        id:{
            type:DataTypes.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        user_id :{
        type: DataTypes.STRING,
        allowNull:false
        },
        course_id:{
            type: DataTypes.STRING,
            allowNull:true
        },
        discovery_date:{
            type: DataTypes.DATE,
            allowNull:false    
        },
        why_id :{
            type:DataTypes.STRING,
            allowNull:true
        },{
        tableName:'course'
         }, {
        timestamps: false
        });
          return Course;
}

exports.courseModel=courseModel;