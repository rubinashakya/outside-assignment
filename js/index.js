$(document).ready(function () {
  // // Get elements
  // const hamburgerBtn = document.querySelector('hamburger-menu');
  // const mainMenu = document.querySelector('main-menu');
  // const menuItems = document.querySelectorAll('.menu--list-item');
  // const backBtns = document.querySelectorAll('.back-btn');
  // const closeBtns = document.querySelectorAll('.h2 .close-btn');

  // // Function to open main menu
  // function openMainMenu() {
  //   mainMenu.classList.add('active');
  // }

  // // Function to close main menu
  // function closeMainMenu() {
  //   mainMenu.classList.remove('active');
  //   closeAllSubmenus(); // Ensure all submenus are closed
  // }

  // // Function to close all submenus
  // function closeAllSubmenus() {
  //   menuItems.forEach(item => {
  //     item.classList.remove('active');
  //     const submenu = item.querySelector('.dropdownmenu');
  //     submenu.style.display = 'none';
  //   });
  // }

  // // Open submenu on menu item click
  // menuItems.forEach(item => {
  //   const link = item.querySelector('a');
  //   link.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     closeAllSubmenus();
  //     item.classList.add('active');
  //     const submenu = item.querySelector('.dropdown');
  //     submenu.style.display = 'block';
  //   });
  // });

  // // Back button to go back to main menu
  // backBtns.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     closeAllSubmenus();
  //     openMainMenu();
  //   });
  // });

  // // Close button to close the entire menu
  // closeBtns.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     closeMainMenu();
  //   });
  // });

  // // Toggle hamburger menu
  // hamburgerBtn.addEventListener('click', () => {
  //   if (mainMenu.classList.contains('active')) {
  //     closeMainMenu();
  //   } else {
  //     openMainMenu();
  //   }
  // });


  
  $(".featured-product-carousel").slick({
    infinite: false,
    arrows: false,
    slidesToScroll: 1,
    centerPadding: "40px",
    variableWidth: true,
  });

});

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburger-menu');
  const mainMenu = document.querySelector('.main-menu');  // Use querySelector to get the first .main-menu
  const menuItems = document.querySelectorAll('.menu-list-item');
  const backBtns = document.querySelectorAll('.back-btn');
  const closeBtns = document.querySelectorAll('.h2 .close-btn');

  // Function to open the main menu
  function openMainMenu() {
    if (mainMenu) {
      mainMenu.classList.add('active');
    }
  }

  // Function to close the main menu
  function closeMainMenu() {
    if (mainMenu) {
      mainMenu.classList.remove('active');
      closeAllSubmenus();
    }
  }

  // Function to close all submenus
  function closeAllSubmenus() {
    menuItems.forEach(item => {
      item.classList.remove('active');
      // const submenu = item.querySelector('.dropdown-menu');
      // if (submenu) {
      //   submenu.style.display = 'none';
      // }
    });
  }

  // Open submenu on menu item click
  menuItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        closeAllSubmenus();
        item.classList.add('active');
        const submenu = item.querySelector('.dropdown-menu');
        if (submenu) {
          submenu.style.display = 'block';
        }
      });
    }
  });

  // Back button to go back to the main menu
  backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllSubmenus();
      openMainMenu();
    });
  });

  // Close button to close the entire menu
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeMainMenu();
    });
  });

  // Toggle hamburger menu
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (mainMenu && mainMenu.classList.contains('active')) {
        closeMainMenu();
        hamburgerBtn.classList.remove('active');
      } else {
        openMainMenu();
        hamburgerBtn.classList.add('active');
      }
    });
  }
});




