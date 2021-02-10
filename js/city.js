export class City {

    constructor(latitude, longitude) {

        this.apiKey = "stSib34qh0EctDbSyNwjJ2Vkj2QSYfdE";
        this.latitude = latitude;
        this.longitude = longitude;
        this.url;
    }

    buildUrl() {

        const url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${this.apiKey}&q=${this.latitude},${this.longitude}`

        this.url = url;
    }


    async getCityId() {

        const response = await fetch(this.url);

        const data = await response.json();
        
        return data;
    }
}