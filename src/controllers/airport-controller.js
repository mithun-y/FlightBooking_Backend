const { StatusCodes } = require("http-status-codes");

const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * post :/airports
 *
 */

async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error)
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

//api/v1/airports/   get request
async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
  

//api/v1/airports/:id    get request
async function getAirportByID(req, res) {
  try {
    const airport = await AirportService.getAirportByID(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// /api/v1/airports/:id    delete request
async function destroyAirportByID(req,res){
    try {
        const response=await AirportService.destroyAirportByID(req.params.id);
        SuccessResponse.data=response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirportByID,
    destroyAirportByID
};
