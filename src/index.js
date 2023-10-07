const express=require('express');
const bodyParser =require('body-parser')
const {Port}=require('./config/serverConfig')
const apiRoutes=require('./routes/index.js')
const db=require('./models/index')
const app=express();
const PerpareAndStartServer=()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',apiRoutes);  
    
    app.listen(Port,()=>{
        console.log("Server Started At "+Port);
        if(process.env.DB_SYNC){
          db.sequelize.sync({alert:true});
        }
      })
};
PerpareAndStartServer();