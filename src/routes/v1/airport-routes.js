const express=require('express');
const {AirportController}=require('../../controllers');
const {AirportMiddlewares}=require("../../middlewares")

const router=express.Router();


//  /api/v1/airports post
router.post('/',
            AirportMiddlewares.validateCreateRequest,
            AirportController.createAirport);

router.get('/',AirportController.getAirports);
router.get('/:id',AirportController.getAirportByID);
router.delete('/:id',AirportController.destroyAirportByID);

module.exports=router;