const modal = document.getElementById("empty-modal");
const closeModal = document.getElementById("close-modal");


placeInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") handleSearch();
});

searchButton.addEventListener("click", () => {
  handleSearch();
})


const handleSearch = () => {
    const searchValue = placeInput.value.trim();
  if (!searchValue) {
    modal.style.display = "block"; // show modal
    return;
  }

  // normal search code here
  console.log("Searching for:", searchValue);
}

// Close modal when clicking X
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});