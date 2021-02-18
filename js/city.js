export class City {

    constructor() {

        this.apiKey = " KNKdjG2BQ1gPwkYGLfqfoLwTaZikFkOL";
        this.cityName;
        this.latitude;
        this.longitude;
        this.url;
        this.cityObj;
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


    async getCityObj() {

        const response = await fetch(this.url);

        const data = await response.json();
        console.log(data)

        if(Array.isArray(data)) {
            
            this.cityObj = {
                cityId: data[0].Key,
                cityName: data[0].LocalizedName
            };
        } else {
            
            this.cityObj = {
                cityId: data.Key,
                cityName: data.LocalizedName
            };
        }

        return this.cityObj;
    }
}