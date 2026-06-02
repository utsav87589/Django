// loading and checking the api_key

const api_key = CONFIG.OPEN_WEATHER_API_KEY;
console.log(api_key);


async function fetch_long_lat(city_name){

    try{

        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${api_key}`);

        if(!response.ok){
            throw new Error('Could not fetch the resources');
        }

        const geo_data = await response.json();
        console.log(geo_data);
        console.log(geo_data[0].lat);
        console.log(geo_data[0].lon);

    }
    catch(error){
        console.error(error);
    }
}


async function fetch_weather_by_coord(lat, lon){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)

        if(!response.ok){
            throw new Error('Could not complete the request');
        }

        const weather_data = await response.json();

        console.log(weather_data)
    }
    catch(error){
        console.error(error);
    }
}

fetch_long_lat("Toronto");
fetch_weather_by_coord(43.6534817, -79.3839347);