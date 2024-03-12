// Button to open modal
document.getElementById("openModalButton").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("hidden");
});

// Button to close modal
document.getElementById("closeModalButton").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
});