const convertToCelsius = function(input) {
  let celsius = (input-32)*5/9;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(input) {
  let fahrenheit = input*9/5+32;
  return parseFloat(fahrenheit.toFixed(1));
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
