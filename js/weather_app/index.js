
const api_key = CONFIG.OPEN_WEATHER_API_KEY;

const button = document.querySelector(".submitFormButton");

button.addEventListener("click", (event) => {

    event.preventDefault();

    const cityName = document.querySelector(".cityInput").value;
    console.log(cityName);
})