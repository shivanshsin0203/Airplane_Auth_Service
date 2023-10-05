const express=require('express');
const {AuthRequestValidation}=require('../../middlewares/index')
const UserController=require('../../controllers/user-controller');

const router=express.Router();

router.post('/signup',AuthRequestValidation.validateUserSignin,UserController.create);
router.post('/signin',AuthRequestValidation.validateUserSignin,UserController.signin);
router.get('/isAuthenticated',UserController.isAuthenticated);

module.exports=router