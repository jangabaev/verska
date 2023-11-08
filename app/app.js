let body = document.querySelector(".body");
let a = document.querySelector(".son");
let header = document.querySelector(".header__item");
let b = document.querySelector(".moon");
function menu() {
  a.style.opacity = "0";
  a.style.visibility = "hidden";
  a.style.display = "none";
  b.style.opacity = "1";
  b.style.visibility = "visible";
  b.style.display = "block";
  body.classList.add("active");
  header.classList.add("active");
}
function exit() {
  b.style.opacity = "0";
  b.style.visibility = "hidden";
  b.style.display = "none";
  a.style.opacity = "1";
  a.style.visibility = "visible";
  a.style.display = "block";
  body.classList.remove("active");
  header.classList.remove("active");
}
