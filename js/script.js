jQuery('document').ready(function(){ 



/////////////////////////////////
////////////////////////////
 if ($(document).height() <= $(window).height())
  $("footer#footer").addClass("navbar-fixed-bottom");
//////////////////////////////////////////
/////////////////////////////
 $('.toggle').on('click', function() {
  $('.menu_button').toggleClass('active');
});

////////////////////////////
$('.some_class').matchHeight();
/////////////////////////////
  // Detect ios 11_x_x affected
    // NEED TO BE UPDATED if new versions are affected 
    (function iOS_CaretBug() {

        var ua = navigator.userAgent,
        scrollTopPosition,
        iOS = /iPad|iPhone|iPod/.test(ua),
        iOS11 = /OS 11_0|OS 11_1|OS 11_2/.test(ua);

        // ios 11 bug caret position
        if ( iOS && iOS11 ) {

            $(document.body).on('show.bs.modal', function(e) {
                if ( $(e.target).hasClass('inputModal') ) {
                    // Get scroll position before moving top
                    scrollTopPosition = $(document).scrollTop();

                    // Add CSS to body "position: fixed"
                    $("body").addClass("iosBugFixCaret");
                }
            });

            $(document.body).on('hide.bs.modal', function(e) {
                if ( $(e.target).hasClass('inputModal') ) {         
                    // Remove CSS to body "position: fixed"
                    $("body").removeClass("iosBugFixCaret");

                    //Go back to initial position in document
                    $(document).scrollTop(scrollTopPosition);
                }
            });

        }
    })();
////////////////////////////////////////////
//////////////////////////////////
function hren() {  
  $(this).parents('li').find(".sub_menu").slideToggle("slow");
  return false;
}

  var bb = false;

  if ($(window).width() <= 993){
      if (!bb){
        $(".has_child>a").bind("click", hren);
        bb = true;
      }
    } else {
      if (bb){
        $(".has_child>a").unbind("click", hren);
        bb = false;
      }
    }

  $(window).on('resize', function(){
    if ($(window).width() <= 993){
      if (!bb){
        $(".has_child>a").bind("click", hren);
        bb = true;
      }
    } else {
      if (bb){
        $(".has_child>a").unbind("click", hren);
        bb = false;
      }
    }

  });           
///////////////////////////////////
 function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
        window.addEventListener('load', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
    }
    window.onload = init();
//////////////////////////////////////
$('[data-toggle="tooltip"]').tooltip()
/////////////////////////
$(window).scroll(function() {

            if ($(this).scrollTop() != 0) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();

            }

        });

        $('#toTop').click(function() {

            $('body,html').animate({
                scrollTop: 0
            }, 800);

        });
//////////////////////////////////
$('.inst_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
    prevArrow: '<div class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow: '<div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
});
 /////////////////////////////////     


});






 


