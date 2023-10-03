const dotenv=require('dotenv');
dotenv.config({path:'../.env'});
module.exports={
   Port:process.env.Port
};