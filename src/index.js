const searchButton = document.querySelector("button");
const userInputElement = document.querySelector(".user-input");
const apiKeyParameter = "?key=80f5580617a24725a91193618241401";
const requestURL = "http://api.weatherapi.com/v1";
const forecastWeatherURL = "/forecast.json";
let userInput;
async function getWeather() {
  response = await fetch(
    `${requestURL + forecastWeatherURL + apiKeyParameter}&q=${userInput}`,
    {
      mode: "cors",
    }
  );
  answer = await response.json();
  return answer;
}
async function processWeather(jsonObject) {
  userInput = userInputElement.value;
  const mainObject = await jsonObject();
  const currentDay = mainObject.forecast.forecastday[0];
  const dayObject = {
    location: mainObject.location.name,
    averageTemp: currentDay.day.avgtemp_c,
    averageHumidity: currentDay.day.avghumidity,
    maxWind: currentDay.day.maxwind_kph,
    firstHour: {
      temp: currentDay.hour[7].temp_c,
      windspeed: currentDay.hour[7].wind_kph,
      humidity: currentDay.hour[7].humidity,
      condition_icon: currentDay.hour[7].condition.icon,
    },
    secondHour: {
      temp: currentDay.hour[12].temp_c,
      windspeed: currentDay.hour[12].wind_kph,
      humidity: currentDay.hour[12].humidity,
      condition_icon: currentDay.hour[12].condition.icon,
    },
    thirdHour: {
      temp: currentDay.hour[19].temp_c,
      windspeed: currentDay.hour[19].wind_kph,
      humidity: currentDay.hour[19].humidity,
      condition_icon: currentDay.hour[19].condition.icon,
    },
    fourthHour: {
      temp: currentDay.hour[21].temp_c,
      windspeed: currentDay.hour[21].wind_kph,
      humidity: currentDay.hour[21].humidity,
      condition_icon: currentDay.hour[21].condition.icon,
    },
  };

  return dayObject;
}
searchButton.addEventListener("click", () => {
  const userInput = userInputElement.value;

  if (!userInput) {
    return;
  } else {
    (async () => {
      const result = await processWeather(getWeather);
      console.log(result);
    })();
  }
});
function renderWeather() {}
