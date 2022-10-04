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

        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "," + searchState + "," + searchCountry + "&units=imperial&appid=c02d215c80eae3269bf0160cf63f01d1", {mode: 'cors'} )
        const currentData = await response.json();
        console.log("Fetching current weather data...", currentData);
        return currentData;
    } catch (err) {
        console.log("Something went wrong...", err)
    }
}

// clear function 
function clearSearch() {
    document.getElementById("search-city").value = "";
    document.getElementById("search-state").value = "";
    document.getElementById("search-country").value = "";
};