const validateUserSignin=(req,res,next)=>{
    if(!req.body.email||!req.body.password){
        return res.status(400).json({
        success:false,
        error:"password or email missing",
        message:"Somthing went wrong"
        })
    }
    next();
}
const validateUserisAdmin=(req,res,next)=>{
    if(!req.body.userId){
        return res.status(400).json({
        success:false,
        error:"User ID missing",
        message:"Somthing went wrong"
        })
    }
    next();
}
module.exports={
    validateUserSignin,
    validateUserisAdmin
}