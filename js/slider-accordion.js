$(document).ready(function () {
    const $slider = $('.product-detail-carousel');
    const $accordionItems = $('.accordion-item');
  
    // Initialize Slick slider
    $slider.slick({
      arrows: false,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000,
    });
  
    // Sync slider with accordion
    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      activateAccordion(nextSlide);
    });
  
    // On accordion title click
    $accordionItems.each(function (index) {
      $(this).find('.accordion-title').on('click', function () {
        activateAccordion(index);
        $slider.slick('slickGoTo', index); // Sync the slider
      });
    });
  
    // Function to activate accordion
    function activateAccordion(index) {
      $accordionItems.each(function (i) {
        const $description = $(this).find('.accordion-description');
        if (i === index) {
          $(this).addClass('active');
          $description.css('max-height', $description.prop('scrollHeight') + 'px'); // Expand
        } else {
          $(this).removeClass('active');
          $description.css('max-height', '0'); // Collapse
        }
      });
    }
  
    // Initialize max-height for the first active accordion (if any)
    const initialIndex = 0; // Set to the initial slide index
    activateAccordion(initialIndex);
  });
  