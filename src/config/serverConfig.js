const dotenv=require('dotenv');
const bcrypt=require('bcrypt')
dotenv.config({path:'../.env'});
module.exports={
   Port:process.env.Port,
   Salt:bcrypt.genSaltSync(10),
   JWT_KEY:process.env.JWT_KEY
};