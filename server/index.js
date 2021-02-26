require('./database/dbconfig.js');
const Course=require('./model/course.js');
const Coursecontent=require('./model/coursecontent.js');
const Courseprogress=require('./model/courseprogress.js');
const Discover= require ('./model/discovery');
const Discoveranswer= require ('./model/discoveryanswer');
const Event= require("./model/event");
const Invitation= require("./model/invitation");
const Option= require("./model/option");
const Order= require("./model/order");
const Orderdetail= require("./model/orderdetail");
const Payment= require("./model/payment");
const Question =require("./model/question");
const User=require("./model/user");
const Why=require("./model/why");
const Cart=require("./model/cart");
const Discovery = require('./model/discovery');
const Discoveryanswer = require('./model/discoveryanswer');





        const find=async()=>{
            const courseprogress= await Courseprogress.findAll({raw:true});
            return courseprogress;
        }
        find().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        
        const find2=async()=>{
            const coursecontent= await Coursecontent.findAll({raw:true});
            return coursecontent;
        }
        find2().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find3=async()=>{
            const cart= await Cart.findAll({raw:true});
            return cart;
        }
        find3().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find4=async()=>{
            const discovery= await Discovery.findAll({raw:true});
            return discovery;
        }
        find4().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find5=async()=>{
            const event= await Event.findAll({raw:true});
            return event;
        }
        find5().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find6=async()=>{
            const order= await Order.findAll({raw:true});
            return order;
        }
        find6().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find7=async()=>{
            const orderdetail= await Orderdetail.findAll({raw:true});
            return orderdetail;
        }
        find7().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find8=async()=>{
            const question= await Question.findAll({raw:true});
            return question;
        }
        find8().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find9=async()=>{
            const discoveryanswer= await Discoveryanswer.findAll({raw:true});
            return discoveryanswer;
        }
        find9().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find10=async()=>{
            const payment= await Payment.findAll({raw:true});
            return payment;
        }
        find10().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find11=async()=>{
            const invitation= await Invitation.findAll({raw:true});
            return invitation;
        }
        find11().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        const find12=async()=>{
            const option= await Option.findAll({raw:true});
            return option;
        }
        find12().then((res)=>{
console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

      