const bg = document.querySelector("section");
const toggle = document.querySelector(".toggle");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

sun.addEventListener("click", () => {
  sun.style.animation = "sunSet 0.6s ease-in both";
  moon.style.animation = "moonRise 0.6s ease-out 0.4s both";
  bg.classList.add("backg-dark");
  bg.classList.remove("backg-light");
  toggle.classList.add("toggle-dark");
  toggle.classList.remove("toggle-light");
});

moon.addEventListener("click", () => {
  moon.style.animation = "moonSet 0.6s ease-in both";
  sun.style.animation = "sunRise 0.6s ease-out 0.4s both";
  bg.classList.remove("backg-dark");
  bg.classList.add("backg-light");
  toggle.classList.remove("toggle-dark");
  toggle.classList.add("toggle-light");
});
