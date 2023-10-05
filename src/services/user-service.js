const UserRepository=require('../repository/user-repository');
const {JWT_KEY}=require("../config/serverConfig");
const jwt=require('jsonwebtoken');
const e = require('express');
class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }
    async create(data){
        try{
            console.log(data);
           const user=await this.userRepository.create(data);
           return user;
        }
        catch(error){
            console.log("An error in Service");
            throw error;
        }
        
    }
    createToken(user){
        try{
            const result= jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
        }catch(error){
            console.log("Something went wrong in token in service");
            throw error;
        }
    }
    verifyToken(token){
        try{
        const responce=jwt.verify(token,JWT_KEY);
        return responce;
        }
        catch(error){
            console.log("Something went wrong in verifcation of token in Service");
            throw error;
        }
    }
}
module.exports=UserService;