export class Weather {

    constructor(cityKey) {

        this.apiKey = "2yxTr52jJg5mvQyuoDoNqlYXTzj6s3eK";
        this.cityKey = cityKey;
        this.url;
    }

    buildUrl() {

        const url = `https://dataservice.accuweather.com/currentconditions/v1/${this.cityKey}?apikey=${this.apiKey}&language=en-GB&details=true`;

        this.url = url;
    }

    async getWeather() {

        const response = await fetch(this.url);
        

        const data = await response.json();
        
        return data[0];
    }
}
