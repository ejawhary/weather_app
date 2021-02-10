export class UI {

    constructor(weatherData) {

    this.loc = document.getElementById("loc");
    // this.weatherImg = document.getElementById("weather-img");
    this.date = document.getElementById("date");
    this.temp = document.getElementById("temp");
    this.weatherStr = document.getElementById("weather-str");
    this.realFeel = document.getElementById("real-feel");
    this.precipitation = document.getElementById("precipitation");
    this.windDirection = document.getElementById("wind-direction");
    this.windSpeed = document.getElementById("wind-speed");
    this.pressure = document.getElementById("pressure");

    }

    paint(city, weatherData) {
        let date = new Date(weatherData.LocalObservationDateTime);
        date = date.toLocaleString('en-GB', { hour12: false});
        console.log(date);
        this.loc.textContent = city;
        // this.weatherImg.src = ("src","img/icons/"+weatherData.WeatherIcon+".png");
        // console.log(this.weatherImg.src);
        this.date.textContent = date;
        this.temp.innerHTML = `${weatherData.Temperature.Metric.Value}&deg;${weatherData.Temperature.Metric.Unit}`;
        this.weatherStr.textContent = weatherData.WeatherText;
        this.realFeel.textContent = weatherData.RealFeelTemperature.Metric.Value;
        
        if(weatherData.PrecipitationType === null) {
            this.precipitation.textContent = "None";
        } else {
            this.precipitation.textContent = weatherData.PrecipitationType;
        }
        
        this.windDirection.innerHTML = `${weatherData.Wind.Direction.Degrees}&deg; ${weatherData.Wind.Direction.English}`;
        this.windSpeed.textContent = `${weatherData.Wind.Speed.Metric.Value}${weatherData.Wind.Speed.Metric.Unit}`;
        this.pressure.textContent = `${weatherData.Pressure.Metric.Value}${weatherData.Pressure.Metric.Unit}`;
    }
} 