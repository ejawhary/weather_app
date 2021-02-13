// Vars
const   openCityFormBtn = document.getElementById("cityBtn"), 
    closeCityFormBtn = document.getElementById("x-btn-city"),
    citySection = document.getElementById("citySection"),
    searchDel = document.getElementById("searchDel"),
    searchBtn = document.getElementById("searchBtn"),
    searchInput = document.getElementById("searchInput"), 
    searchForm = document.getElementById("cityForm");
    



// Event Listeners
openCityFormBtn.addEventListener("click", () => openCityForm());
searchInput.addEventListener("keyup", () => showX())
closeCityFormBtn.addEventListener("click", () => closeCityForm());
searchDel.addEventListener("click", () => clearSearchInput())

// hide address bar mobile
export const hideAddressBar = () => {
    if(!window.location.hash) {
      if(document.height < window.outerHeight)
        document.body.style.height = (window.outerHeight + 50) + 'px';
      setTimeout( function(){ 
          window.scrollTo(0, 1); 
          document.body.style.height = 'auto'; 
        }, 50 );
    }
}


// Functions
export const openCityForm = () => {
    clearSearchInput();
    hideFooterBtns();
    disableUiBtns();
    citySection.classList.remove("hidden");
    searchInput.focus();
}

export const closeCityForm = () => {
    enableUiBtns();
    showFooterBtns();
    citySection.classList.add("hidden");
}

const disableUiBtns = () => {
    const btns = document.querySelectorAll(".uiBtn");
    btns.forEach((btn) => {
        btn.disabled = true;
    });
}
const enableUiBtns = () =>  {
    const btns = document.querySelectorAll(".uiBtn");
    btns.forEach((btn) => {
        btn.disabled = false;
    });
}

const hideFooterBtns = () => {
    document.getElementById("curr-loc").classList.add("hidden");
    document.getElementById("refresh").classList.add("hidden");
}

const showFooterBtns = () => {
    document.getElementById("curr-loc").classList.remove("hidden");
    document.getElementById("refresh").classList.remove("hidden");
}

const showX = () => {
    
    if(searchInput.value.length) {
        searchDel.classList.remove("hidden");
    } else {
        searchDel.classList.add("hidden");
    }
}

const clearSearchInput = () => {

    searchInput.value = "";
    showX();
    searchInput.focus();
}