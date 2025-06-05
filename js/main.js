// js/main.js
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 3000); // 假设开场动画持续 3 秒
});
