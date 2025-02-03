const { StatusCodes } = require("http-status-codes");

const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

// post: /cities
// req-body:{name:req.body.name}
async function create_City(req, res) {
    try {
      const city = await CityService.createCity({
        name:req.body.name
      });
      SuccessResponse.data = city;
      return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
      // console.log(error)
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }


module.exports={
   create_City
}