
  var header = $("#header"),
      ofertaH = $("#oferta").innerHeight(),
      scrollOffset = $(window).scrollTop();


  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
      if( scrollOffset >= ofertaH ) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  }


  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }


  var grid = document.querySelector('.grid');
  var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: 200
});





// init with selector
  var msnry = new Masonry( '.grid', {
  // options...
}); 


function hideGradient() {
  const grid = document.querySelector('.grid');
  grid.classList.add('hide-gradient');
}


/* Menu nav toggle */
$("#nav_toggle").on("click", function(event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});



/* Collapse */
$("[data-collapse]").on("click", function(event) {
  event.preventDefault();
  var $this = $(this),
      blockId = $this.data('collapse');

  $this.toggleClass("active");
});