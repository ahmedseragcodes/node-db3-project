const Schemes = require("./scheme-model");
const db = require("../../data/db-config");

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  
  const { id } = req.params;

  if(db("schemes")
  .where("schemes.scheme_id", id)){
    next();
  } else {
    res.status(404).json({message: `scheme with scheme_id ${id} not found`});
  }


};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  
  const schemeName = req.body.scheme_name;

  if(!schemeName || typeof schemeName !== "string" || schemeName === ""){
    res.status(400).json({message: "invalid scheme_name"});
  } else {
    next();
  }

}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  
  const stepBeingValidated = req.body;

  if(!stepBeingValidated.instructions || typeof stepBeingValidated.instructions !== "string" || stepBeingValidated.instructions === ""){
    res.status(400).json({message: "invalid step"});
  } else {
    if(!stepBeingValidated.step_number || typeof stepBeingValidated.step_number !== "number" || stepBeingValidated.step_number < 1){
      res.status(400).json({message: "invalid step"});      
    } else {
      next();
    }
  }


}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
