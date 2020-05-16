console.log("Hello");

window.addEventListener("load", main);

var slideRed = document.querySelector("#rangeRed");
var slideBlue = document.querySelector("#rangeBlue");
var slideGreen = document.querySelector("#rangeGreen");

function main() {
  applyColor();
  slideRed.addEventListener("change", pushRed);
  slideBlue.addEventListener("change", pushBlue);
  slideGreen.addEventListener("change", pushGreen);
}

function applyColor() {
  document.querySelector("#txtRed").value = slideRed.value;
  document.querySelector("#txtBlue").value = slideBlue.value;
  document.querySelector("#txtGreen").value = slideGreen.value;

  document.querySelector(
    "#divRGB"
  ).style.backgroundColor = `rgb(${slideRed.value},${slideGreen.value},${slideBlue.value})`;
}

function pushRed() {
  document.querySelector("#txtRed").value = this.value;
  applyColor();
}

function pushBlue() {
  document.querySelector("#txtBlue").value = this.value;
  applyColor();
}

function pushGreen() {
  document.querySelector("#txtGreen").value = this.value;
  applyColor();
}
