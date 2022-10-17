export default function initMenu() {
  const btnMenuOpen = document.querySelector(".header__menu-button");
  const btnMenuClose = document.querySelector(".menu__button");
  const drawer = document.querySelector(".js-drawer");

  btnMenuOpen.addEventListener("click", function() {
    drawer.classList.add("drawer_open")
  });

  btnMenuClose.addEventListener("click", function() {
    drawer.classList.remove("drawer_open")
  });
};