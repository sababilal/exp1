const {Sequelize} = require('sequelize');
require('../database/dbconfig.js');

        const Course= sequelize.define('Course',{
        id:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        name :{
        type: Sequelize.STRING,
        allowNull:false
        },
        description:{
            type: Sequelize.STRING,
            allowNull:true
        },
        price :{
            type: Sequelize.BIGINT,
            allowNull:false    
        },
        currency :{
            type:Sequelize.STRING,
            allowNull:true
        }},{
        tableName:'course',
        timestamps: false
         });

   
        //  const register =async ()=>{
                   
        //     const course= await Coursecontent.create({
        //         name:"course2",
        //         price:20
        //     });
        //     return course;
        //       }
        

        //       register().then((response)=>{
        //         console.log(response);
        //                 }).catch((error)=>{
        //                     console.log(error);
        //                         });



module.exports=Course;