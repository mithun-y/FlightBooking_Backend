const express=require('express');
const {AirplaneController}=require('../../controllers');
const {AirplaneMiddlewares}=require("../../middlewares")

const router=express.Router();


//  /api/v1/airplane post
router.post('/',
            AirplaneMiddlewares.validateCreateRequest,
            AirplaneController.createAirplane);

router.get('/',AirplaneController.getAirplanes);
router.get('/:id',AirplaneController.getAirplaneByID);
router.delete('/:id',AirplaneController.destroyAirplaneByID);

module.exports=router;