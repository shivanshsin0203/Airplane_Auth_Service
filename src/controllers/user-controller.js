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
const isAuthenticated=async(req,res)=>{
   try{
        const token=req.headers['x-access-token'];
        console.log(token);
        const responce=await userService.isAuthenticated(token);
        return res.status(201).json({
         message :"Successfully verified ",
         success:true,
         data:responce,
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
const isAdmin=async(req,res)=>{
   try{
      const response=await userService.signIn(req.body.userId);
      return res.status(201).json({
        message :"Successfully fetched",
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
module.exports={create,signin,isAuthenticated,isAdmin}