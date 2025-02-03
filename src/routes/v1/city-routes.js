const express=require("express");
const router=express.Router();

const {CityController}=require('../../controllers')
const {CityMiddlewares}=require('../../middlewares')

//  /api/v1/city post 
router.post('/',CityController.create_City);


module.exports=router;