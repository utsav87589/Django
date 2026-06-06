
const api_key = CONFIG.OPEN_WEATHER_API_KEY;

const button = document.querySelector(".submitFormButton");

button.addEventListener("click", async (event) => {

    event.preventDefault();

    const cityName = document.querySelector(".cityInput").value;
    console.log(cityName);

    const {latitude, longitude} = await getCityGeoCoordinates(cityName);
    console.log(`${latitude} :: ${longitude}`)

    getCityWeatherByCoordinates(latitude, longitude);
    
})

async function getCityGeoCoordinates(cityName){
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

async function getCityWeatherByCoordinates(latitude, longitude){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`);
        if (!response.ok){
            throw new Error("Error fetching the Data");
        }
        else{
            const cityWeather = await response.json();
            console.log(cityWeather);
            console.log(cityWeather['main']);
            console.log(cityWeather['main'].temp);
            console.log(cityWeather['main'].humidity);
        }
    }
    catch(error){
        console.error(error);
    }
}


