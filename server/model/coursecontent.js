const {Sequelize} = require('sequelize');
 require('../database/dbconfig.js');

        const Coursecontent= sequelize.define('Coursecontent',{
        id:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        content:{
            type: Sequelize.TEXT,
            allowNull:false
        }
        },{
        tableName:'course_content',
        timestamps: false
        });
  
       
  
  
  
//         const check=async()=>{
//             const coursecontent = await Coursecontent.findAll({
//                 attributes: { exclude: ['createdAt','updatedAt'] }});
//             return coursecontent;
//         }
//         check().then((response)=>{
// console.log(response);
//         }).catch((error)=>{
//             console.log(error);
//                 })

              

module.exports=Coursecontent;