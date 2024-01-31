document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.getElementById("nav");
  const mobileMenuButton = document.getElementById("mobile-menu-button");

  function updateNavBarTransparency() {
      if (window.scrollY > 50) {
          navBar.classList.add("transparent");
      } else {
          navBar.classList.remove("transparent");
      }
  }

  updateNavBarTransparency();

  window.addEventListener("scroll", updateNavBarTransparency);

  function handleResize() {
      if (window.innerWidth <= 800) {

          navBar.classList.add("hide-mobile");
      } else {

          navBar.classList.remove("hide-mobile");
      }
  }

  window.addEventListener("resize", handleResize);


  mobileMenuButton.addEventListener("click", function () {
      navBar.classList.toggle("hide-mobile");
  });

 
  handleResize();
});