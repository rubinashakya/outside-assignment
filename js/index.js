$(document).ready(function () {
  $(".featured-product-carousel, .mealtime-product-carousel, .bathtime-product-carousel, .playtime-product-carousel").slick({
    infinite: false,
    arrows: true,
    slidesToScroll: 1,
    centerPadding: "40px",
    variableWidth: true,
    prevArrow: `
        <button class="slick-prev">
          <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.80775 7.12817L1.17374 12.2175C0.672027 12.552 -3.74409e-06 12.1923 -3.69137e-06 11.5893L-2.80153e-06 1.41067C-2.74881e-06 0.807679 0.672028 0.448019 1.17374 0.782498L8.80774 5.87183C9.25599 6.17066 9.25599 6.82934 8.80775 7.12817Z"/>
</svg>
        </button>`,
    nextArrow: `
        <button class="slick-next">
          <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.80775 7.12817L1.17374 12.2175C0.672027 12.552 -3.74409e-06 12.1923 -3.69137e-06 11.5893L-2.80153e-06 1.41067C-2.74881e-06 0.807679 0.672028 0.448019 1.17374 0.782498L8.80774 5.87183C9.25599 6.17066 9.25599 6.82934 8.80775 7.12817Z"/>
</svg>
        </button>`,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", () => {
  const announcementBar = document.querySelector(".announcement-bar");
  announcementBar.style.display = "none";
  announcementBar.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  const isMobileScreen = window.matchMedia("(max-width: 991px)");

  function runMenuScript() {
    const hamburgerBtn = document.getElementById("hamburger-menu");
    const mainMenu = document.querySelector(".main-menu"); // Use querySelector to get the first .main-menu
    const menuItems = document.querySelectorAll(".menu-list-item");
    const backBtns = document.querySelectorAll(".back-btn");
    const closeBtns = document.querySelectorAll(".h2 .close-btn");

    // Function to open the main menu
    function openMainMenu() {
      if (mainMenu) {
        mainMenu.classList.add("active");
      }
    }

    // Function to close the main menu
    function closeMainMenu() {
      if (mainMenu) {
        mainMenu.classList.remove("active");
        closeAllSubmenus();
      }
    }

    // Function to close all submenus
    function closeAllSubmenus() {
      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
    }

    // Open submenu on menu item click
    menuItems.forEach((item) => {
      const link = item.querySelector("a");
      if (link) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          closeAllSubmenus();
          item.classList.add("active");
          const submenu = item.querySelector(".dropdown-menu");
          if (submenu) {
            submenu.style.display = "block";
          }
        });
      }
    });

    // Back button to go back to the main menu
    backBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        closeAllSubmenus();
        openMainMenu();
      });
    });

    // Close button to close the entire menu
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        closeMainMenu();
      });
    });
    console.log("hamburgerBtn", hamburgerBtn);
    // Toggle hamburger menu
    if (hamburgerBtn) {
      hamburgerBtn.addEventListener("click", () => {
        if (mainMenu && mainMenu.classList.contains("active")) {
          closeMainMenu();
          hamburgerBtn.classList.remove("active");
        } else {
          openMainMenu();
          hamburgerBtn.classList.add("active");
        }
      });
    }
  }

  // Run the script if on mobile screen
  if (isMobileScreen.matches) {
    runMenuScript();
  }

  // Add a listener for screen size changes
  window.addEventListener("resize", () => {
    console.log("resize", isMobileScreen.matches);
    if (isMobileScreen.matches) {
      runMenuScript();
    } else {
      location.reload(); // Reload the page or reset the menu for larger screens
    }
  });
});
