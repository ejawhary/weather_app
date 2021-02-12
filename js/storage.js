export class Storage {

    constructor() {

        this.defaultCityId = "207931";
        this.defaultCityName = "Dublin";
        this.cityId;
        this.cityName;
    }

    getFromStorage() {

        if((localStorage.getItem("cityId") === null || localStorage.getItem("cityId") === null) ||(localStorage.getItem("cityId") === null && localStorage.getItem("cityId") === null)) {
            this.cityId = this.defaultCityId;
            this.cityName = this.defaultCityName;
        } else {
            this.cityId = localStorage.getItem("cityId");
            this.cityName = localStorage.getItem("cityName");
        }

        return {
            cityId: this.cityId,
            cityName: this.cityName
        }
    }

    setStorage(cityId, cityName) {
        localStorage.setItem("cityId", cityId);
        localStorage.setItem("cityName", cityName)
    }
}