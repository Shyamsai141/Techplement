const search = document.querySelector(".search-box");
const searchButton = document.querySelector(".searchbtn");

const weatherCondition = document.querySelector(".weather-condition");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city-name");
const humidity = document.querySelector(".humid-val");
const wind = document.querySelector(".wind-val");
const weatherConditionImage = document.querySelector(".weather-condition-image");

function getWeather() {
    weatherUpdate();
}

async function weatherUpdate(city) {
    if (city) {
        const apiKey = "f8e991488e2d8c3631939eb0620acb75";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}`;

        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        var data = await response.json();

          if (data.weather[0].main === "Clouds") {
            weatherConditionImage.innerHTML =
              '<img src="clouds.png" alt="clouds"/>';
          } else if (data.weather[0].main === "Mist") {
            weatherConditionImage.innerHTML =
              '<img src="mist.png" alt="mist"/>';
          } else if (data.weather[0].main === "Clear") {
            weatherConditionImage.innerHTML =
              '<img src="clear.png" alt="clear"/>';
          } else if (data.weather[0].main === "Rain") {
            weatherConditionImage.innerHTML =
              '<img src="rain.png" alt="rain"/>';
          } else if (data.weather[0].main === "Drizzle") {
            weatherConditionImage.innerHTML =
              '<img src="drizzle.png" alt="drizzle"/>';
          } else if (data.weather[0].main === "Snow") {
            weatherConditionImage.innerHTML =
              '<img src="snow.png" alt="snow"/>';
          }

          weatherCondition.innerText = data.weather[0].main;

          cityName.innerText = data.name;
          temp.innerText = data.main.temp + "°c";

          humidity.innerText = data.main.humidity;
          wind.innerText = data.wind.speed + " km/h";

          console.log(data);
        } else {
          const apiKey = "f8e991488e2d8c3631939eb0620acb75";
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${search.value}`;

          const response = await fetch(apiUrl + `&appid=${apiKey}`);
          var data = await response.json();

          if (data.weather[0].main === "Clouds") {
            weatherConditionImage.innerHTML =
              '<img src="clouds.png" alt="clouds"/>';
          } else if (data.weather[0].main === "Mist") {
            weatherConditionImage.innerHTML =
              '<img src="mist.png" alt="mist"/>';
          } else if (data.weather[0].main === "Clear") {
            weatherConditionImage.innerHTML =
              '<img src="clear.png" alt="clear"/>';
          } else if (data.weather[0].main === "Rain") {
            weatherConditionImage.innerHTML =
              '<img src="rain.png" alt="rain"/>';
          } else if (data.weather[0].main === "Drizzle") {
            weatherConditionImage.innerHTML =
              '<img src="drizzle.png" alt="drizzle"/>';
          } else if (data.weather[0].main === "Snow") {
            weatherConditionImage.innerHTML =
              '<img src="snow.png" alt="snow"/>';
          }

          weatherCondition.innerText = data.weather[0].main;

          cityName.innerText = data.name;
          temp.innerText = data.main.temp + "°c";

          humidity.innerText = data.main.humidity;
          wind.innerText = data.wind.speed + " km/h";

          console.log(data);
        }
      }

      weatherUpdate("Bengaluru");

      function updateDateTime() {
        const time = document.querySelector(".time");
        const now = new Date();

        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const formattedDate = now.toLocaleDateString(undefined, options);
        const formattedTime = now.toLocaleTimeString();

        time.innerHTML = `${formattedTime}`;
      }

      updateDateTime();

      setInterval(updateDateTime, 1000);