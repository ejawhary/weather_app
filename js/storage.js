export class Storage {
    
    constuctor() {
        
        this.defaultCityId = "321626";
        this.cityId;
    }

    getFromStorage() {
        if(!localStorage.getItem("cityID") === null) {
            this.cityId = this.defaultCityId;
        } else {
            this.cityId = localStorage.getItem("cityid");
        }

        return this.cityId;
    }

    setStorage(cityId) {
        localStorage.setItem("cityID", cityId);
    }
}