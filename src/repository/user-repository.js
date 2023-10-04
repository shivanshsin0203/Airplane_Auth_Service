const {User}=require('../models/index');
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
}
module.exports=UserRepository;