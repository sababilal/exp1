const {Sequelize} = require('sequelize');
 require('../database/dbconfig.js');

        const Courseprogress= sequelize.define('Courseprogress',{
        id:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
       completed_date:{
            type:Sequelize.DATE,
            allowNull:false
       }
        },{
            tableName:'course_progress',
            timestamps: false
        });
   


module.exports=Courseprogress;