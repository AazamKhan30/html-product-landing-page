
$(document).ready(function () {

    $('a.nav-link').on("click", function () {
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 72
      }, 300);
      $(".navbar-collapse").collapse('hide');
      $('.offcanvas').offcanvas('hide');
      return false;
    });
    $('.has-menu ').click(function(){
       $(this).toggleClass('open');
      $(this).find('.submenu').toggleClass('show');
  })

  $(".search i").click(function(e){
    e.preventDefault();
    $(this).toggleClass('ri-search-line ri-close-line')
    $(".searchBox").slideToggle("slow");
    $(".searchBox input[type='search']").focus();
  });
  });

  function imgUrl(hmmm){
    document.getElementById("productMain").src = hmmm;
    }

    /*=============== SCROLL REVEAL ANIMATION ===============*/






