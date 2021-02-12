export class Storage {

    constructor() {

        this.defaultCityObj = {
            cityId: "207931",
            cityName: "Dublin"
        }
        this.cityObj;
    }

    getFromStorage() {

        if(localStorage.getItem("cityObj") === null) {
            this.cityObj = this.defaultCityObj;
        } else {
            this.cityObj = JSON.parse(localStorage.getItem("cityObj"));
        }

        return this.cityObj;
    }

    setStorage(cityId, cityName) {
        this.cityObj = {
            cityId: cityId,
            cityName: cityName
        }

        localStorage.setItem("cityObj", JSON.stringify(this.cityObj));
    }
}