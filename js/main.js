import { Storage } from "./storage.js"
import { Search } from "./search.js"
import { closeCityForm } from "./functions.js"
import { getCoords } from "./location.js"
import { City } from "./city.js"
import { Weather } from "./weather.js"
import { UI } from "./ui.js"
import "./functions.js"

// init Storage
const storage = new Storage();


// Event Listener
document.addEventListener("DOMContentLoaded", () => {
    init();
});
// City Search Button Event Listener
document.getElementById("cityForm").addEventListener("submit", (e) => {
    e.preventDefault();
    selectCity();
});

const refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", () => {
    location.reload(); 
});


// Procedural App Init calls
const init = async () => {

    const cityObjFromStorage = storage.getFromStorage();
    
    const cityObjFromApi = await cityGetCity(cityObjFromStorage.cityName);
    console.log(cityObjFromApi)
    
    const weather = await getWeather(cityObjFromApi.cityId);

    console.log(weather)

    const ui = setUI(cityObjFromApi.cityName, weather);

    // const location = await getLocation();
}

// City Search
const selectCity = async () => {

    const cityName = getUserInput();
    const cityObj = await cityGetCity(cityName);
    storage.setStorage(cityObj.cityId, cityObj.cityName);
    init();
    setTimeout(() => closeCityForm(), 200)
    
}


// Healper Functions

const cityGetCity = async (cityName) => {
    const city = new City();
    
    city.cityBuildUrl(cityName);
    
    const cityKey = city.getCityId();
    
    return cityKey;
}

const coordsGetCity = async (latitude, longitude,) => {
    const city = new City(latitude, longitude);
    
    city.coordBuildUrl();
    
    const cityKey = city.getCityId();
    
    return cityKey;
}

const getUserInput = () => {
    const search = new Search();
    const userInput = search.getSearchResults();

    return userInput;
}

const getLocation = async () => {

    const coords = await getCoords();
        
    return {
        latitude: coords.latitude,
        longitude: coords.longitude
    }
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