export class City {

    constructor() {

        this.apiKey = "2yxTr52jJg5mvQyuoDoNqlYXTzj6s3eK";
        this.cityName;
        this.latitude;
        this.longitude;
        this.url;
    }

    cityBuildUrl(cityName) {

        this.cityName= cityName;
        console.log(this.cityName)
        const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.cityName}`
        console.log(url)
        this.url = url;
    }

    coordBuildUrl(latitude, longitude) {
        this.latitude = latitude; 
        this.longitude = longitude;

        const url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${this.apiKey}&q=${this.latitude},${this.longitude}`

        this.url = url;
    }


    async getCityId() {

        const response = await fetch(this.url);

        const data = await response.json();
        console.log(data)
        
        return {
            cityId: data[0].Key,
            cityName: data[0].LocalizedName
        };
    }
}