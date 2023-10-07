const {User,Role}=require('../models/index');
const user = require('../models/user');

class UserRepository{
    async create(data){
        try{
            console.log(data);
         const user=await User.create(data);
         return user;
        }
        catch(error){
            console.log("An error in User Repository");
            throw error
        }
    }
    async destroy(userId){
        try{
         const user=await User.destroy({
            where:{
                id:userId
            }
         });
         return true;
        }
        catch(error){
            console.log("An error in User Repository");
            throw error
        }
    }
    async getById(userId){
        try{
          const user= await User.findByPk(userId,{
            attributes:['email','id'],
          })
        }
        catch(error){
            console.log("An error in User Repository");
            throw error
        }
    }
    async getByEmail(useremail){
        try{
         const user=await User.findOne({
            where:{
            email:useremail
            }
         });
         return user
        }
        
        catch(error){
            console.log("An error in User Repository");
            throw error
        }
    }
    async isAdmin(userId){
        try{
        const user= await User.findByPk(userId);
          const adminRole=await Role.findOne({
            where:{
                name:'ADMIN'
            }
          });
          return user.hasRole(adminRole);
        }
        catch(error){
            console.log("An error in User Repository");
            throw error
        }
    }
}
module.exports=UserRepository;