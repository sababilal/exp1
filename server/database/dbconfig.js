const {Sequelize} = require('sequelize');


     const sequelize=new Sequelize(
        'why','root','',{
            dialect: 'mysql',
            host: 'localhost'
    });
  

    module.exports=sequelize; 
    global.sequelize=sequelize; 