// JavaScript Document

// slide elements sideways
// http://www.learningjquery.com/2009/02/slide-elements-in-different-directions/
// http://api.jqueryui.com/slide-effect/

$(document).ready(function(){

	// on click, display line1, line2, then content box
	$('.marker').click(function(){
		
		// finding location of this marker (four quadrants to determine where popup goes)
	   var marker_pos = $(this).parent().position();
	   
	   // get container measurements and half measurements for easy variables
	   var container_h = $("#container").height();
	   		var half_h = container_h / 2;
			
	   var container_w = $("#container").width();
	   		var half_w = container_w / 2;
	   
	   
	   // close any content boxes already open
		$('.active').next().slideUp("fast","linear", function() {
			$(this).next().slideUp("fast","linear", function() {
				$(this).next().slideUp("fast","linear");
			});
		});


		// top left quadrant
		if( (marker_pos.left < half_w) && (marker_pos.top < half_h) ){
			console.log("top left");

			// toggle lines and content opening/closing
			$(this).next('.line1').slideDown("fast","linear", function() {
				$(this).next('.line2').slideDown("fast","linear", function() {
					$(this).next('.content').slideDown("fast","linear");
				});
			});
			$('.active').removeClass('active');
			$(this).addClass("active");
		};

	   
	   // top right quadrant
		if( (marker_pos.left >  half_w) && (marker_pos.top < half_h) ){
			console.log("top right");

			// toggle lines and content opening/closing
			$(this).next('.line1').slideDown("fast","linear", function() {
				$(this).next('.line2').slideDown("fast","linear", function() {
					$(this).next('.content').slideDown("fast","linear");
				});
			});
			$('.active').removeClass('active');
			$(this).addClass("active");
		};
		
		
		// bottom left quadrant
	   if( (marker_pos.left <  half_w) && (marker_pos.top > half_h) ){
			console.log("bottom left");

			// toggle lines and content opening/closing
			$(this).next('.line1').slideDown("fast","linear", function() {
				$(this).next('.line2').slideDown("fast","linear", function() {
					$(this).next('.content').slideDown("fast","linear");
				});
			});
			$('.active').removeClass('active');
			$(this).addClass("active");
		};
		
		
		// bottom right quadrant
	   if( (marker_pos.left >  half_w) && (marker_pos.top > half_h) ){
			console.log("bottom right");

			// toggle lines and content opening/closing
			$(this).next('.line1').slideDown("fast","linear", function() {
				$(this).next('.line2').slideDown("fast","linear", function() {
					$(this).next('.content').slideDown("fast","linear");
				});
			});
			$('.active').removeClass('active');
			$(this).addClass("active");
		};
	   
	}); // end on click
	
	
	// close popup when "close" button clicked
	$('.close').click(function(e){
		// prevent window from refreshing when link clinked
		e.preventDefault();
		
		// close popup/content window
		// needs to be fixed to go backwards (callback functions)
		$('.popup').slideUp("slow","linear");
	});
	// close popup when overlay is clicked
		
	
}); //end document.ready