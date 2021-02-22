const {Sequelize} = require('sequelize');
 require('../../dbconfig/dbconnect.js');


        const Discovery= sequelize.define('Discovery',{
        id:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        discovery_date:{
            type: Sequelize.DATE,
            allowNull:false    
        }},
         {
        tableName:'discovery',
        timestamps: false
        });
          


module.exports=Discovery;