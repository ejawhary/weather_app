import { Storage } from "./storage.js"
import { Search } from "./search.js"
import { closeCityForm } from "./functions.js"
import { getCoords } from "./location.js"
import { City } from "./city.js"
import { Weather } from "./weather.js"
import { UI } from "./ui.js"
import "./functions.js"

// hide address bar mobile
window.addEventListener("load", () => { 
    setTimeout( () => { 
        window.scrollTo(0, 1); 
    }, 0); 
});

// init Storage
const storage = new Storage();
// init City
const city = new City();


// Event Listener
document.addEventListener("DOMContentLoaded", () => {
    init();
});
// City Search Button Event Listener
document.getElementById("cityForm").addEventListener("submit", (e) => {
    e.preventDefault();
    selectCity();
});

// Current position button calls functo get current pos (coords)
document.getElementById("curr-loc").addEventListener("click", () => coordsGetCity())

const refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", () => {
    location.reload(); 
});


// Procedural App Init calls
const init = async () => {

    const cityObjFromStorage = storage.getFromStorage();
    console.log(cityObjFromStorage)
    const cityObjFromApi = await cityGetCity(cityObjFromStorage.cityName);
    console.log(cityObjFromApi)
    
    const weather = await getWeather(cityObjFromApi.cityId);

    console.log(weather)

    const ui = setUI(cityObjFromApi.cityName, weather);

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
       
    city.cityBuildUrl(cityName);
    
    const cityObj = await city.getCityObj();
    
    return cityObj;
}

const coordsGetCity = async () => {
    const location = await getLocation();
    
    city.coordBuildUrl(location.latitude, location.longitude);
    
    const cityObj = await city.getCityObj();
    
    storage.setStorage(cityObj.cityId, cityObj.cityName);
    init();
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