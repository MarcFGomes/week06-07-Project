//const searchButton = document.getElementById("search-button");
//const placeInput = document.getElementById("place");

searchButton.addEventListener("click", () => {
  const searchValue = placeInput.value.trim();
  if (!searchValue) return;

  console.log('I am here');
  // Add to previous searches (from history.js)
  addToHistory(searchValue);
})