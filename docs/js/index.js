const navBarMobileButtom = document.querySelector(".navBarMobile");
const navBarMobileMenu = document.querySelector(".mobileMenu");
const navBarMobileMenuDisplayed = document.querySelector(".mobileMenuButtom");
let mobile = true;

const navBarDisplay = () => {
  if (mobile) {
    mobile = false;
    navBarMobileButtom.classList.add("navBarMobileHide");
    navBarMobileMenu.classList.add("mobileMenuDisplay");
  }
};

const navBarHide = () => {
  if (!mobile) {
    mobile = true;
    navBarMobileMenu.classList.remove("mobileMenuDisplay");
    navBarMobileButtom.classList.remove("navBarMobileHide");
  }
};

navBarMobileButtom.addEventListener("click", navBarDisplay);
navBarMobileMenuDisplayed.addEventListener("click", navBarHide);
