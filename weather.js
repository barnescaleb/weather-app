// DOM elements
const domManip = (() => {
    const searchBtn = document.querySelector(".search-btn");
    const clearBtn = document.querySelector(".clear-btn");
    searchBtn.addEventListener("click", getWeather);
    clearBtn.addEventListener("click", clearSearch);

})();

// function to fetch current weather from user input
async function getWeather() {

    try {
        const searchCity = document.getElementById("search-city").value;
        const searchState = document.getElementById("search-state").value;
        const searchCountry = document.getElementById("search-country").value;
        console.log(searchCity);
        console.log(searchState);
        console.log(searchCountry);

        const response = await fetch('')
        console.log(response.json);

        return getWeather;
    } catch (err) {
        console.log("Something went wrong...")
    }
}

// clear function 
function clearSearch() {
    document.getElementById("search-city").value = "";
    document.getElementById("search-state").value = "";
    document.getElementById("search-country").value = "";
};