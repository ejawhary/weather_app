import { getCoords } from "./location.js"
import { City } from "./city.js"
import { Weather } from "./weather.js"
import { UI } from "./ui.js"


// DOM Event Listener
document.addEventListener("DOMContentLoaded", () => {
    init();
});
const refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", () => {
    location.reload(); 
});


// Procedural App Init calls
const init = async () => {
    
    const location = await getLocation();

    console.log(location);
    
    const city = await getCity(location.latitude, location.longitude);

    console.log(city);

    const weather = await getWeather(city.Key);

    console.log(weather)

    const ui = setUI(city.AdministrativeArea.EnglishName, weather);
}

// Healper Functions
const getLocation = async () => {

    const coords = await getCoords();
        
    return {
        latitude: coords.latitude,
        longitude: coords.longitude
    }
}

const getCity = async (latitude, longitude) => {
    const city = new City(latitude, longitude);
    
    city.buildUrl();
    
    const cityKey = city.getCityId();

    return cityKey;
}

const getWeather = (cityKey) => {

    const weather = new Weather(cityKey);
    
    weather.buildUrl();

    const weatherData = weather.getWeather();

    return weatherData; 
}

const setUI = (city, weather) => {

    const ui = new UI();

    ui.paint(city, weather);
}