const UserService=require('../services/user-service');
const userService=new UserService();
const create=async(req,res)=>{
     try{
        const response =await userService.create({
        email:req.body.email,
        password:req.body.password
       });
       return res.status(201).json({
        message :"Successfully created new user",
        success:true,
        data:response,
        err:{}
       })
     }
     catch(error){
        console.log(error);
        return res.status(500).json({
            message:'Something went wrong',
            data:{},
            success:false,
            err:error
        })
     }
}
const signin=async(req,res)=>{
   try{
    const response=await userService.signIn(req.body.email,req.body.password);
    return res.status(201).json({
      message :"Successfully signedin",
      success:true,
      data:response,
      err:{}
     })
   }
   catch(error){
      console.log(error);
      return res.status(500).json({
          message:'Something went wrong',
          data:{},
          success:false,
          err:error
      })
   }
}
module.exports={create,signin}