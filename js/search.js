export class Search {

    constructor() {
        this.userInput = document.getElementById("searchInput").value;
        this.searchInput;
    }

    getSearchResults() {

        this.searchInput = this.userInput;

        return this.searchInput;
    }
}