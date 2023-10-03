const express=require('express');
const {Port}=require('./config/serverConfig')
const app=express();
const PerpareAndStartServer=()=>{
      app.listen(Port,()=>{
        console.log("Server Started At "+Port);
      })
};
PerpareAndStartServer();