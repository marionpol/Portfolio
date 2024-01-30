document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("nav");
  
    function updateNavBarTransparency() {
      if (window.scrollY > 50) {
        navBar.classList.add("transparent");
      } else {
        navBar.classList.remove("transparent");
      }
    }
  
    updateNavBarTransparency();
  
    window.addEventListener("scroll", updateNavBarTransparency);
  });