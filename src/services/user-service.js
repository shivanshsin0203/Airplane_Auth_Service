const UserRepository=require('../repository/user-repository');

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
}
module.exports=UserService;