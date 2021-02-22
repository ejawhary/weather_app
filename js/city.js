export class City {

    constructor() {

        this.apiKey = "rdepR8roMGOjJBSiL7Wb7gdT7G7ED7jU";
        this.cityName;
        this.latitude;
        this.longitude;
        this.url;
        this.cityObj;
    }

    cityBuildUrl(cityName) {

        this.cityName= cityName;
        const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.cityName}`
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
        
        if(Array.isArray(data)) {
            
            if(data.length === 0) {
                this.cityObj = {
                    cityId: undefined,
                    cityName: undefined
                }
            } else {
                this.cityObj = {
                    cityId: data[0].Key,
                    cityName: data[0].LocalizedName
                }
            }
            
        } else {

            if(data.length === 0) {
                this.cityObj = {
                    cityId: undefined,
                    cityName: undefined
                }
            } else {
                this.cityObj = {
                    cityId: data.Key,
                    cityName: data.LocalizedName
                }
            }
        }

        return this.cityObj;
    }
}