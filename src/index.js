const apiKeyParameter = "?key=80f5580617a24725a91193618241401";
const requestURL = "http://api.weatherapi.com/v1";
const currentWeatherURL = "/current.json";
const forecastWeatherURL = "/forecast.json";

async function getWeather() {
  response = await fetch(
    `${requestURL + forecastWeatherURL + apiKeyParameter}&q=london&days=3`,
    {
      mode: "cors",
    }
  );
  answer = await response.json();
  console.log(answer);
}
getWeather();
