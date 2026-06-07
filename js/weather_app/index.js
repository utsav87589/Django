const api_key = CONFIG.OPEN_WEATHER_API_KEY;

const button = document.querySelector(".submitFormButton");
const displayCard = document.querySelector(".displayCard");

button.addEventListener("click", async (event) => {

    event.preventDefault();
    const cityName = document.querySelector(".cityInput").value;

    if(!cityName){
        displayCard.classList.add("hidden");
        window.alert("Enter a city name please!");
    }

    try{
        const{temperature, humidity, description, iconId} = await getCityWeatherByName(cityName);
        displayCard.classList.remove("hidden");

        const weatherIconUrl = `https://openweathermap.org/payload/api/media/file/${iconId}.png`;
        const displayIcon = document.querySelector(".displayIcon");

        displayIcon.src = `${weatherIconUrl}`;
        displayIcon.alt = `${description}`;

        displayIcon.classList.remove("hidden");

        document.querySelector(".displayCity").textContent = cityName;
        document.querySelector(".displayTemp").textContent = `Temp : ${temperature}°C`;
        document.querySelector(".displayHumidity").textContent = `Humidity : ${humidity}%`;
        document.querySelector(".displayDesc").textContent = `${description}`;

    }

    catch(error){
        console.error(error);
        displayCard.classList.add("hidden");
        window.alert("Please check the city name!");
    }
    
})

async function fetchCityGeoCoordinates(cityName){

    try{
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${api_key}`);

        if (!response.ok){
            throw new Error('Could not fetch the data!');
        }
        else{
            const cityGeoCoordinates = await response.json();
            return {
                'latitude' : cityGeoCoordinates[0].lat,
                'longitude' : cityGeoCoordinates[0].lon
            }
        }
    }
    catch(error){
        console.error(error);
    }
}

async function fetchCityWeatherByCoordinates(latitude, longitude){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`);
        if (!response.ok){
            throw new Error("Error fetching the Data");
        }
        else{
            const cityWeather = await response.json();

            return{
                'temperature' : cityWeather['main'].temp,
                'humidity' : cityWeather['main'].humidity,
                'description' : cityWeather['weather'][0].description,
                'iconId' : cityWeather['weather'][0].icon
            }
        }
    }
    catch(error){
        console.error(error);
    }
}

async function getCityWeatherByName(cityName){

    try{
        const {latitude, longitude} = await fetchCityGeoCoordinates(cityName);
        const {temperature, humidity, description, iconId} = await fetchCityWeatherByCoordinates(latitude, longitude);

        return{
            temperature, humidity, description, iconId
        }

    }

    catch(error){
        console.error(error);
    }

}
