/* jQuery Example: Display Hidden Div Based on Scrollbar Position and Page Load */
/* Created by: techNerdia.com */
	
$(document).ready(function(){
 $.ajaxSetup( {cache:false} );
	
/* Load DIV When Page Loads */
	$(window).load( function () {
		$('.div1').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	});


/* Load DIV After Scrollbar Is Moved 300px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 300 ) {
           loadDiv2(); /* calls loadDiv2 Function below */
        }
	});

	function loadDiv2() {
		$('.div2').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	}
	
/* Load DIV After Scrollbar Is Moved 600px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 600 ) {
           loadDiv3(); /* calls loadDiv3 Function below */
        }
	});

	function loadDiv3() {
		$('.div3').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	}
	
/* Load DIV After Scrollbar Is Moved 1000px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 1000 ) {
           loadDiv4(); /* calls loadDiv4 Function below */
        }
	});

	function loadDiv4() {
		$('.div4').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	}	

/* Load DIV After Scrollbar Is Moved 1300px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 1300 ) {
           loadDiv5(); /* calls loadDiv5 Function below */
        }
	});

	function loadDiv5() {
		$('.testimonials').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	}	
	
/* Load DIV After Scrollbar Is Moved 1500px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 1500 ) {
           loadDiv6(); /* calls loadDiv6 Function below */
        }
	});

	function loadDiv6() {
		$('.partner').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	}
	
/* Load DIV After Scrollbar Is Moved 1800px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 1800 ) {
           loadDiv7(); /* calls loadDiv7 Function below */
        }
	});

	function loadDiv7() {
		$('.entry-left').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	}	

/* Load DIV After Scrollbar Is Moved 1800px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 1800 ) {
           loadDiv8(); /* calls loadDiv8 Function below */
        }
	});

	function loadDiv8() {
		$('.entry-right').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	}
	
/* Load DIV After Scrollbar Is Moved 2000px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 2000 ) {
           loadDiv9(); /* calls loadDiv9 Function below */
        }
	});

	function loadDiv9() {
		$('.calltoaction').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	}
	
}); /* Do Not Remove */