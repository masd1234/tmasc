const navBarMobileButtom = document.querySelector(".navBarMobile");
const navBarMobileMenu = document.querySelector(".mobileMenu");
const navBarMobileMenuDisplayed = document.querySelector(".mobileMenuButtom");

const navBarDisplay = () => {
  if ((navBarMobileMenu.style.display = "none")) {
    navBarMobileMenu.style.display = "flex";
  }
};

const navBarHide = () => {
  if ((navBarMobileMenu.style.display = "flex")) {
    navBarMobileMenu.style.display = "none";
  }
};

navBarMobileButtom.addEventListener("click", navBarDisplay);
navBarMobileMenuDisplayed.addEventListener("click", navBarHide);
