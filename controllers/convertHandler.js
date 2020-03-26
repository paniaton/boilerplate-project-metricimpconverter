/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var matches = input.match(/(\d+\.\d*|\.\d+|\d+)(\/\d+)?/); 
    if(matches)
      result = eval(matches[0]);
    else
      result = 1;
    console.log(result)
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var matches = input.match(/gal|lbs|l|km|mi|kg/i); 
    result = matches[0].toLowerCase()
    console.log(result)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case "l": 
        result = "gal"
        break;
      case "gal":
        result = "l"
        break;
      case "km": 
        result = "mi"
        break;
      case "mi":
        result = "km"
        break;
      case "lbs": 
        result = "kg"
        break;
      case "kg":
        result = "lbs"
        break; 
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit){
      case "l": 
        result = initNum / galToL
        break;
      case "gal":
        result = initNum * galToL
        break;
      case "km": 
        result = initNum / miToKm
        break;
      case "mi":
        result = initNum * miToKm
        break;
      case "lbs": 
        result = initNum / lbsToKg
        break;
      case "kg":
        result = initNum * galToL
        break; 
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var initUnitComp = tenerComp(initUnit);
    var returnUnitComp = tenerComp(returnUnit);
    return initNum + " " + initUnitComp + " converts to " + returnNum + " " + returnUnitComp
  };
  
  function tenerComp(initUnit){
    switch(initUnit){
      case "l": 
        return "liters"
      case "gal":
        return "gallons"
      case "km": 
        return "kilograms"
      case "mi":
        return "miles"
      case "lbs": 
        return "pounds"
      case "kg":
        return "kilograms"
      default : "error" 
    }
  }
}

module.exports = ConvertHandler;
