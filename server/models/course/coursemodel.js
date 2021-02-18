const {Sequelize,DataTypes} = require('sequelize');
const Dbconnect= require('../../dbconfig/dbconnect.js');

const courseModel=()=>{

    const sequelize=Dbconnect();
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
        },{
        tableName:'course'
    }, {
        timestamps: false
    });
    
    const  syncUser= async()=>{
        await Course.sync();        
    }
    syncUser();
    return Course;
}

exports.courseModel=courseModel;