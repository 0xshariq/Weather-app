const cityName = document.querySelector(".city");
const region = document.querySelector(".region");
const countryName = document.querySelector(".country");
const inputBox = document.querySelector(".input-box");
const button = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const temperatureC = document.querySelector(".temp-c");
const temperatureF = document.querySelector(".temp-f");
const windSpeedKPH = document.querySelector(".wind-kph");
const windSpeedMPH = document.querySelector(".wind-mph");
const windTemp = document.querySelector(".wind-temp");
const humidity = document.querySelector(".humidity");
const condition = document.querySelector(".condition");
const BASE_URL =
  "https://api.weatherapi.com/v1/current.json?key=af7e85bdbb3e46a7946145455241707";


//main code
button.addEventListener("click", async () => {
  try {
    const URL = `${BASE_URL}&q=${inputBox.value}`;
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    cityName.textContent = `City: ${data.location.name}`;
    region.textContent = `Region: ${data.location.region}`;
    countryName.textContent = `Country: ${data.location.country}`;
    temperatureC.textContent = `Temperature in Celsius: ${data.current.temp_c}`;
    temperatureF.textContent = `Temperature in Fahrenheit: ${data.current.temp_f}`;
    windSpeedKPH.textContent = `Wind Speed(kmph): ${data.current.wind_kph} km/h`;
    windSpeedMPH.textContent = `Wind Speed(mph): ${data.current.wind_kph} miles/h`;
    windTemp.textContent = `Wind Temperature: ${data.current.wind_degree}°C`;
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    condition.textContent = `Condition: ${data.current.condition.text}`;
  } 


catch (error) {
    console.error("Error fetching data:", error);
    cityName.textContent = "Failed to fetch data";
    region.textContent = "Failed to fetch data";
    countryName.textContent = "Failed to fetch data";
    temperatureC.textContent = "Failed to fetch data";
    temperatureF.textContent = "Failed to fetch data";
    windSpeedKPH.textContent = "Failed to fetch data";
    windSpeedMPH.textContent = "Failed to fetch data";
    windTemp.textContent = "Failed to fetch data";
    humidity.textContent = "Failed to fetch data";
    condition.textContent = "Failed to fetch data";
  }
});


//reset button
reset.addEventListener("click", () => {
    inputBox.value = "";
    cityName.textContent = "";
    region.textContent = "";
    countryName.textContent = "";
    temperatureC.textContent = "";
    temperatureF.textContent = "";
    windSpeedKPH.textContent = "";
    windSpeedMPH.textContent = "";
    windTemp.textContent = "";
    humidity.textContent = "";
    condition.textContent = "";
});