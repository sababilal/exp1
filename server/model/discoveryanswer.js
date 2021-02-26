const {Sequelize} = require('sequelize');
require('../database/dbconfig.js');

        const Discoveryanswer= sequelize.define('Discoveryanswer',{
        id:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        }},{
            tableName:'discovery_answer',
            timestamps: false
        });
         
module.exports=Discoveryanswer;