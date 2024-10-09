const convertToCelsius = function (fahrenheit) {
  let convertedCelcius = ((fahrenheit - 32) * 5) / 9;

  if (convertedCelcius !== Math.floor(convertedCelcius)) {
    return Math.round(convertedCelcius * 10) / 10;
  } else {
    return convertedCelcius;
  }
};

const convertToFahrenheit = function (celcius) {
  let convertedFahrenheit = (celcius * 9) / 5 + 32;

  if (convertedFahrenheit !== Math.floor(convertedFahrenheit)) {
    return Math.round(convertedFahrenheit * 10) / 10;
  } else {
    return convertedFahrenheit;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
