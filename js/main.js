console.log('Main JS Loaded');
document.getElementById("openGameSelector").addEventListener("click", () => {
  document.getElementById("gameSelectorModal").classList.remove("hidden");
});
document.getElementById("closeGameSelector").addEventListener("click", () => {
  document.getElementById("gameSelectorModal").classList.add("hidden");
});
