// Constants
const logOut = document.getElementById("log_out");
const logIn = document.getElementById("log_in");
const bgNavigation = document.querySelector(".header_navigation__bg");
const regBlock = document.querySelector(".header__registration");
const burgerMenu = document.querySelector(".menu_conteiner");
const menuListTopLevel = document.querySelector("#menu-list-top");
const menuSubLevel = document.querySelector("#menu-sub-level");
const burgerIcon = document.querySelector(".header__menu__icon");
const closeBurgerIcon = document.querySelector("#close-icon");
const menuWomen = document.querySelector("#women");
const subView = document.querySelector("#sub-view");
const subMenuLevel2 = document.querySelector("#menu-sub-level-2");
const clothing = document.querySelector("#clothing");
const menuCloseIcon = document.querySelector(".menu__body-logo-svg");
const menuStores = document.querySelector("#our_stores");
const dropDown = document.querySelector("#drop-down");
const svg = document.querySelector("#svg");
const footetItems = document.querySelector("#footer__items");
const theme = document.querySelector("#theme");
const mobileSearchIcon = document.querySelector("#search-mobile-icon");

// Event Listeners
dropDown.addEventListener("click", dropAndDown);
subView.addEventListener("click", showMainMenu);
menuWomen.addEventListener("click", hideTopMenu);
logOut.addEventListener("click", logInState);
logIn.addEventListener("click", logOutState);
burgerIcon.addEventListener("click", toggleMenu);
closeBurgerIcon.addEventListener("click", toggleMenu);
clothing.addEventListener("click", openSubMenuLevel2);
subMenuLevel2.addEventListener("click", goPrewPage);
menuCloseIcon.addEventListener("click", closeMenu);
mobileSearchIcon.addEventListener("click", toogleMobileSerch);

//Funtions
function changeTheme() {
  theme.getAttribute("href") == "./css/stylesWhite.css"
    ? theme.setAttribute("href", "./css/stylesDark.css")
    : theme.setAttribute("href", "./css/stylesWhite.css");
}
function logInState() {
  logOut.classList.toggle("hide");
  logIn.classList.toggle("hide");
  regBlock.style.marginLeft = "-60px";
  changeTheme();
  checkTheme();
}
function logOutState() {
  logIn.classList.toggle("hide");
  logOut.classList.toggle("hide");
  regBlock.style.marginLeft = "0px";
  changeTheme();
  checkTheme();
}

function dropAndDown() {
  svg.classList.toggle("svg");
  footetItems.classList.toggle("hide");
  footetItems.classList.toggle("footer__items");
}

function toggleMenu() {
  burgerMenu.classList.toggle("active");
}

function hideTopMenu() {
  menuSubLevel.classList.toggle("active");
  menuListTopLevel.classList.toggle("hide");
  menuStores.classList.add("active");
}

function showMainMenu() {
  menuListTopLevel.classList.toggle("hide");
  menuSubLevel.classList.toggle("active");
  menuStores.classList.remove("active");
}

function goPrewPage() {
  subMenuLevel2.classList.toggle("active");
  menuSubLevel.classList.toggle("active");
  menuCloseIcon.classList.toggle("active");
}

function openSubMenuLevel2() {
  subMenuLevel2.classList.toggle("active");
  menuSubLevel.classList.toggle("active");
  menuCloseIcon.classList.toggle("active");
}

function closeMenu() {
  goPrewPage();
  showMainMenu();
  burgerMenu.classList.remove("active");
}

function toogleMobileSerch() {
  //constants
  const mobileHeaderBG = document.querySelector(".header_navigation__bg");
  const mobSearchIconWhite = document.querySelector("#search-icon-white");
  const closeIconBlack = document.querySelector("#close-icon-black");
  const mobHeaderLogoColor = document.querySelector(".menu__header__logo");
  const burgIconWhite = document.querySelector("#burg-span");
  const burgIconBlack = document.querySelector("#burg-icon-black");
  const baskeWhite = document.querySelector("#basket_white");
  const baskeBlack = document.querySelector("#basket-black");
  const searchMobForm = document.querySelector(".header__search-mobile");
  const mainContent = document.querySelector(".main__content");
  const navMobHeader = document.querySelector(".navitaton-mobile__header");

  //actions with blocks
  mobileHeaderBG.classList.toggle("header_navigation__bg_active_seerch");
  mobSearchIconWhite.classList.toggle("hide");
  closeIconBlack.classList.toggle("hide");
  mobHeaderLogoColor.classList.toggle("black");
  burgIconWhite.classList.toggle("hide");
  burgIconWhite.classList.toggle("bgColor-none");
  burgIconBlack.classList.toggle("hide");
  baskeWhite.classList.toggle("hide");
  baskeBlack.classList.toggle("hide");
  searchMobForm.classList.toggle("hide");
  mainContent.classList.toggle("margin-top");
  navMobHeader.classList.toggle("baseline");
}

function checkTheme() {
  const whiteSearchIcon = document.querySelector("#white-them-icon");
  const darkSearchIcon = document.querySelector("#dark-them-icon");

  if (theme.getAttribute("href") == "./css/stylesWhite.css") {
    darkSearchIcon.classList.add("hide");
    whiteSearchIcon.classList.remove("hide");
  } else {
    whiteSearchIcon.classList.toggle("hide");
    darkSearchIcon.classList.remove("hide");
  }
}
window.onload = checkTheme();
