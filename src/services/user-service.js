const UserRepository=require('../repository/user-repository');
const {JWT_KEY}=require("../config/serverConfig");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
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
    async signIn(email,plainPassword){
           try{
            const user=await this.userRepository.getByEmail(email);
            const passwordmatch=this.checkPassword(plainPassword,user.password);
            if(!passwordmatch){
                console.log("Password Not Match");
                throw {error:"Password Not Match"}
            }
            const new_Token=this.createToken({email:user.email,id:user.id});
            return new_Token;
           }
           catch(error){
            console.log("Error in Service");
            throw error;
           }
    }
    checkPassword(userInputPassword,encryptedPassword){
        try{
           return bcrypt.compareSync(userInputPassword,encryptedPassword);
        }
        catch(error){
            console.log("Something went wrong in serivce in Password Check");
            throw error;
        }
    }
}
module.exports=UserService;