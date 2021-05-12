const Schemes = require("./scheme-model");

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {

const { id } = req.params;

if(Schemes.findById(id)){
  next();
} else {
  res.status(404).json({message: `scheme with scheme_id ${id} not found`});
}



}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {

const schemeName = req.body.scheme_name;

if (schemeName){
 if (typeof(schemeName) === "string"){
   next();
 } else {
  res.status(400).json({message: `invalid ${schemeName}`});
 }
} else {
  res.status(400).json({message: `invalid ${schemeName}`});
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

const instructions = req.body.instructions;
const stepNumber = req.body.step_number;

if (instructions){
  if (typeof(instructions)==="string"){
    if (typeof(stepNumber)==="number"){
      if (stepNumber){
        next();
      } else {
        res.status(400).json({message: "invalid step"})
      }
    } else {
      res.status(400).json({message: "invalid step"})
    }
  } else {
    res.status(400).json({message: "invalid instructions"})
  }
} else {
  res.status(400).json({message: "invalid instructions"})
}

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
