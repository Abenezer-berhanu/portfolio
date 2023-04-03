const menu = document.querySelector("#humberger-menu");
const navBar = document.querySelector(".hid-nav");
const xMenu = document.querySelector("#x-menu");
const root = document.querySelector(":root");
const LscreenMode = document.querySelector("#L-screen-mode");
const DscreenMode = document.querySelector("#D-screen-mode");
const readLess = document.querySelectorAll(".Read-less");
console.log(readLess)
var rootStyles = getComputedStyle(root);
var mainBodyBg = rootStyles.getPropertyValue("--body-bg-color");
var secondBodyBg = rootStyles.getPropertyValue("--second-bg-color");
var textColor = rootStyles.getPropertyValue("--text-color");
var hoverText = rootStyles.getPropertyValue("--hover-text-color");

let arrayOfColor = [
  "#f23434",
  "#5d5d97",
  "#4b4b55",
  "#00d4ff",
  "#10b6d7",
  "#020024",
  "#d76be5",
  "#f2e934",
  "#81f234",
  "#34f2d0",
  "#345bf2",
  "#d334f2",
  "#f234a8",
  "#f23434",
];

DscreenMode.onclick = () => {
  LscreenMode.style.display = "block";
  DscreenMode.style.display = "none";
  root.style.setProperty("--body-bg-color", mainBodyBg);
  root.style.setProperty("--second-bg-color", secondBodyBg);
  root.style.setProperty("--text-color", textColor);
  root.style.setProperty("--hover-text-color", hoverText);
};

LscreenMode.onclick = () => {
  LscreenMode.style.display = "none";
  DscreenMode.style.display = "block";
  root.style.setProperty("--body-bg-color", textColor);
  root.style.setProperty("--second-bg-color", hoverText);
  root.style.setProperty("--text-color", mainBodyBg);
  root.style.setProperty("--hover-text-color", "green");
};

menu.onclick = () => {
  navBar.style.display = "flex";
  menu.style.display = "none";
  xMenu.style.display = "block";
};
xMenu.onclick = () => {
  navBar.style.display = "none";
  menu.style.display = "flex";
  xMenu.style.display = "none";
};


const readMoreTxt = document.querySelectorAll(".Read-more-txt");
let readMoreBtn = document.querySelectorAll(".Read-more");

for (let i = 0; i < readMoreTxt.length; i++) {
  readMoreBtn[i].addEventListener("click", function () {
    readMoreTxt[i].style.display = "inline";
    readMoreBtn[i].style.display = "none";
    readLess[i].style.display = "block"
  });
}
for (let i = 0; i < readLess.length; i++) {
  readLess[i].addEventListener("click", function () {
    readMoreTxt[i].style.display = "none";
    readMoreBtn[i].style.display = "block";
    readLess[i].style.display = "none";
  });
}