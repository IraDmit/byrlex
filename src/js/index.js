document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.querySelector(".header__lower-menu__catalog");
  const burger = document.querySelector(".header__menu__burger"),
    mobMenu = document.querySelector(".mobileMenu"),
    closeMain = document.querySelector(".closeMain"),
    brandMob = document.querySelector(".mobileBrands"),
    brands = document.querySelector(".andMobile"),
    closeBrand = document.querySelector(".closeBrand"),
    closeCatalog = document.querySelector(".closeCatalog");

  catalog.addEventListener("click", ({ target }) => {
    document.querySelector(".catalog").classList.toggle("open");
  });

  closeCatalog.addEventListener("click", ({ target }) => {
    document.querySelector(".catalog").classList.remove("open");
  });

  // burger
  burger.addEventListener("click", () => {
    mobMenu.classList.add("open");
  });
  closeMain.addEventListener("click", () => {
    mobMenu.classList.remove("open");
  });

  brands.addEventListener("click", () => {
    brandMob.classList.add("open");
  });
  closeBrand.addEventListener("click", () => {
    brandMob.classList.remove("open");
  });
});
