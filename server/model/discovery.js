const {Sequelize} = require('sequelize');
require('../database/dbconfig.js');
const Discoveryanswer = require("./discoveryanswer.js");


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
  
  
//         const insert=async()=>{
//             const discoveryanswer= await Discoveryanswer.findAll({raw:true});
//             return discoveryanswer;
//         }
//         insert().then((res)=>{
// console.log(res);
//         }).catch((err)=>{
//             console.log(err);
//         })


module.exports=Discovery;