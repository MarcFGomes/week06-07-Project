//Load localStorage
let citiesSearched = JSON.parse(localStorage.getItem('citiesSearched')) || [];


const searchButton = document.getElementById("search-button");
const placeInput = document.getElementById("place");
const historyList = document.getElementById("history-list");

let previousSearches = [];

// Add search to history
function addToHistory(searchValue) {
  if (!previousSearches.includes(searchValue)) {
    previousSearches.push(searchValue);
    updateHistoryList();
  }
}

// Update dropdown list
function updateHistoryList() {
  historyList.innerHTML = "";
  previousSearches.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.className = "px-4 py-2 hover:bg-gray-100 cursor-pointer";
    li.addEventListener("click", () => {
      placeInput.value = item;
    });
    historyList.appendChild(li);
  });
}

// Handle hover to show/hide
const historyButton = document.getElementById("history-button");
historyButton.addEventListener("mouseenter", () => historyList.classList.remove("hidden"));
historyButton.addEventListener("mouseleave", () => historyList.classList.add("hidden"));
historyList.addEventListener("mouseenter", () => historyList.classList.remove("hidden"));
historyList.addEventListener("mouseleave", () => historyList.classList.add("hidden"));