const express=require('express');
const bodyParser =require('body-parser')
const {Port}=require('./config/serverConfig')
const apiRoutes=require('./routes/index.js')
const app=express();
const PerpareAndStartServer=()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',apiRoutes);  
    
    app.listen(Port,()=>{
        console.log("Server Started At "+Port);
      })
};
PerpareAndStartServer();