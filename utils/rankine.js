// Implement functions here 👇
function rankineToKelvin (value) {
  return value * 5/9;
}

function rankineToFahrenheit (value) { 
  return value - 459.67;
}

function rankineToCelsius(value){
  return (value - 491.67) * 5/9;    
}

// TODO: Uncomment after implemented
module.exports = {
  rankineToCelsius,
  rankineToKelvin,
  rankineToFahrenheit,
};
