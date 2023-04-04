jQuery(document).ready(function($) {



  $(document).ready(function() {

//Preloader
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('#loading');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});



  $(document).ready(function(){
    if ( $(window).width() < 768) {
      $("#sidebar-filters").slideUp();
      $( ".fltr-btn"  ).toggleClass( "collapsed" );
    }
});

$( ".fltr-btn" ).click(function() {
  $( this ).toggleClass( "collapsed" );
  var $this = $(this);
  if ($this.hasClass("collapsed")) {
      $("#sidebar-filters").slideUp();
    }else {
      $("#sidebar-filters").slideDown();
    }
});


$(document).ready(function () {
	let footerheight = $(".site-footer").outerHeight();
	$("#luxy ").css({
		"padding-bottom": footerheight,
	});
});


$(document).ready(function () {
	$(".wps_rma_refund_form_wrapper").addClass("container");
	$(".wps_rma_order_msg_wrapper").addClass("container");
	$(".wps_order_msg_history_container").addClass("container");
  
});






      //document
      $(function () {
        var $window = $(window)
        
        document.onmousewheel = function () {
            customScroll()
        }
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', customScroll, false)
        }
        function customScroll(event) {
            var delta = 0
            if (!event) {
                event = window.event;
            }
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120
            } else if (event.detail) {
                delta = -event.detail / 3
            }
            if (delta) {
                var scrollTop = $window.scrollTop()
                var finScroll = scrollTop - parseInt(delta * 100) * 3
                TweenMax.to($window, 1, {
                    scrollTo: {y: finScroll, autoKill: true},
                    ease: Power1.easeOut,
                    autoKill: true,
                    overwrite: 5
                })
            }
            if (event.preventDefault) {
                event.preventDefault()
            }
            event.returnValue = false
        }
    });

/* Sticky Nav bar*/

var $topbar = $('.topbar').outerHeight();
var $yset;

if($topbar == null){
    $yset = $('.full-desk').outerHeight();
}else{
    $yset = $topbar;
}
$(window).scroll(function(){
    var sticky = $('.full-desk'),
        scroll = $(window).scrollTop();

    if (scroll >= $yset) {
      sticky.addClass('sticky');
    if($topbar == null){
        $('main').css('margin-top',$yset);
    }else{
      $('main').css('margin-top',$yset+$topbar);
    }
    }
    else {
      sticky.removeClass('sticky');
      $('main').css('margin-top',0);
    };
});

$(window).load(function(){
  $(".slick-dots").children('li').html("");
    var sticky = $('.full-desk'),
        scroll = $(window).scrollTop();

    if (scroll >= $yset) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
});


/* Search */


$( ".search-btn" ).click(function() {
  $( this ).toggleClass( "clicked" );
  var $this = $(this);
  if ($this.hasClass("clicked")) {
      $(".search-box").slideDown();
      $(".searchn").html("close");
      $("#search-input").focus();
    }else {
      $(".search-box").slideUp();
      $(".searchn").html("search");
    }
});


$( ".search-btnn" ).click(function() {
  $( this ).toggleClass( "clicked" );
  var $this = $(this);
  if ($this.hasClass("clicked")) {
      $(".search-box").slideDown();
      $(".searchn").html("close");
      $("#search-input").focus();
    }else {
      $(".search-box").slideUp();
      $(".searchn").html("search");
    }
});


/** Sidebar */

$( ".toggle-menu" ).click(function() {
    $( this ).toggleClass( "clicked" );
    $( ".side-menu" ).toggleClass( "side-show" );
    
    var $this = $(this);
    if ($this.hasClass("clicked")) {
        $("#menu-slide").html("close");
      } else {
        $("#menu-slide").html("menu");
      }
  });



/* Slider */
$('.main-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  dots: true,
  arrows: false,
  fade: true,
  pauseOnHover: false,
  pauseOnFocus: false
  });

  


})


