/*--------------------------------------------------------------------*/
/*	DOCUMENT READY FUNCTIONS
/*--------------------------------------------------------------------*/

/*--------------------------------------------------------------------*/
/*  THUMB OVERLAY
/*--------------------------------------------------------------------*/

$(function() {
// OPACITY OF BUTTON SET TO 0%
$(".overlay").css("opacity","0");
 
// ON MOUSE OVER
$(".overlay").hover(function () {
 
// SET OPACITY TO 70%
$(this).stop().animate({
opacity: .7
}, "slow");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0
}, "fast");
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 300);
    return false;
});

/*--------------------------------------------------------------------*/
/*  FANCYBOX
/*--------------------------------------------------------------------*/

$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$(".fancybox").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});

/*--------------------------------------------------------------------*/
/*  STICKY HEADER
/*--------------------------------------------------------------------*/
$(document).ready(function() {
	(function() {
		//settings
		var fadeSpeed = 10, fadeTo = 0.9, topDistance = 20;
		var topbarME = function() { $('#fullwidth-head').fadeTo(fadeSpeed,1); }, topbarML = function() { $('#fullwidth-head').fadeTo(fadeSpeed,fadeTo); };
		var inside = false;
		//do
		$(window).scroll(function() {
			position = $(window).scrollTop();
			if(position > topDistance && !inside) {
				//add events
				topbarML();
				$('#fullwidth-head').bind('mouseenter',topbarME);
				$('#fullwidth-head').bind('mouseleave',topbarML);
				inside = true;
			}
			else if (position < topDistance){
				topbarME();
				$('#fullwidth-head').unbind('mouseenter',topbarME);
				$('#fullwidth-head').unbind('mouseleave',topbarML);
				inside = false;
			}
		});
	})();
});

/*--------------------------------------------------------------------*/
/*  FORM INPUT
/*--------------------------------------------------------------------*/

$(document).ready(function() {
  	$('.inputuser').click(function() {
    if (this.value == this.defaultValue) {
      this.value = '';
    }
  	});
  	$('.inputuser').blur(function() {
    if (this.value == '') {
      this.value = this.defaultValue;
    }
  	});
	});

/*--------------------------------------------------------------------*/
/*  TESTIMONIAL SLIDER
/*--------------------------------------------------------------------*/

$('.bxslider').bxSlider({
  pagerCustom: '#bx-pager',
  auto: true
});
	

});