

/* ------- Menu Mobile (aside menu) -------------------------*/
$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
  });
/* ------- End Menu Mobile --------------------- */



/* Projects Slide (carousel) */
$(".owl-carousel").owlCarousel({
    items: 2,
    margin: 20,
    loop: true,
    center: true,
    dots: false
  });

  /* End Projects Slide (carousel) */