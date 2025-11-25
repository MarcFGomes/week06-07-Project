//Load localStorage
let previousSearches = JSON.parse(localStorage.getItem('citiesSearched')) || [];

const historyButton = document.getElementById("history-button");
const searchButton = document.getElementById("search-button");
const placeInput = document.getElementById("place");
const historyList = document.getElementById("history-list");

 previousSearches = ["arrr","times"];

// Show/Hide dropdown functions
let hideTimeout;
const showHistory = () => {
     clearTimeout(hideTimeout);
     historyList.style.display = "block";
    }

const hideHistory =() => {
    hideTimeout = setTimeout(() => historyList.style.display = "none", 300);
}

//Hovering the button
historyButton.addEventListener("mouseenter", showHistory);
historyButton.addEventListener("mouseleave", hideHistory);

// Hovering the list itself
historyList.addEventListener("mouseenter", showHistory);
historyList.addEventListener("mouseleave", hideHistory);