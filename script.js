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

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');


    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });


    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            if (navLink.textContent.trim() === "My resume") {

                if(/Mobi/i.test(navigator.userAgent) && !/iPad|Tablet/i.test(navigator.userAgent)) {
                    event.preventDefault();
                    window.open('images/CV_Marion_Poljakov.pdf', '_blank');
                }
            } else {
                navMenu.classList.remove('active');
            }
        });
    });
});

