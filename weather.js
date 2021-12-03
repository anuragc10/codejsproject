const inputTxt = document.querySelector(".inputTxt");
var button = document.querySelector(".btn");
const showData = document.querySelector(".show-details");
const API_key = "e4310918222209c95da4a4190a3d3f80";

button.addEventListener("click", () => {
  const cityInput = inputTxt.value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_key}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      inputTxt.value = "";
      showData.innerHTML = `
        <ul>
            <li class="city">${data.name.toUpperCase()}</li>
            <li class="temp">${data.main.temp} °c</li>
            <li class="description">${data.weather[0].description.toUpperCase()}</li>
            <li class="wind">WIND SPEED: ${data.wind.speed} km/h</li>
        </ul>
      `;
    });
});
