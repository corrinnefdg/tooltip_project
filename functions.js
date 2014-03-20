// JavaScript Document

// slide elements sideways
// http://www.learningjquery.com/2009/02/slide-elements-in-different-directions/
// http://api.jqueryui.com/slide-effect/

// syntax
//.show("slide","linear","fast", function(){ });
//.show("slide",{ direction: "left" },"linear","fast", function(){ });

// add CSS
// $("p").css({"background-color":"yellow","font-size":"200%"});


$(document).ready(function(){

	// on click, display line1, line2, then content box
	$('.marker').click(function(){
		
		// finding location of this marker (four quadrants to determine where popup goes)
	   var marker_pos = $(this).parent().position();
	   
	   // get container height and width for four quadrants
	   var container_h = $("#container").height();
	   		var container_hh = container_h / 2;
			
	   var container_w = $("#container").width();
	   		var container_hw = container_w / 2;
			
			
		// get height and width of marker for lines to be centered
		var marker_h = $(this).height();
			var marker_hh = marker_h / -2;
			
		var marker_w = $(this).width();
			var marker_hw = marker_w / -2;
	   
	   
	   // close any content boxes already open
	   // need to reverse order...
	   // also make unique direction to each quadrant
		$('.active').next().slideUp("fast","linear", function() {
			$(this).next().slideUp("fast","linear", function() {
				$(this).next().slideUp("fast","linear");
			});
		});
		

		// get content width to determine width of line1
		var content_w = $('.content').width();
		console.log("content_w:", content_w);

		// top left quadrant
		if( (marker_pos.left < container_hw) && (marker_pos.top < container_hh) ){
			console.log("top left");

			// toggle lines and content opening/closing
			// line1 
			$(this).next('.line1').css({"left":marker_w,"top":marker_hh,"width":(content_w / 2)})
			.show("slide",{ direction: "left" },"slow", function(){
				
				var line1_w = $(this).width();
				var line1_h = $(this).height();
				
				// line2
				$(this).next('.line2').css({"left":(marker_w + line1_w),"top":marker_hh-line1_h,"height":marker_h})
				.show("slide",{ direction: "up" },"slow", function(){
					
					var line2_w = $(this).width();
					var line2_h = $(this).height();
					
					// content
					$(this).next('.content').css({"left":(line1_w),"top":(line2_h / -2)-line1_h} )
					.show("slide",{ direction: "up" },"slow")

				});
				
			});
			
			$('.active').removeClass('active');
			$(this).addClass("active");
		};

	   
	   // top right quadrant
		if( (marker_pos.left >  container_hw) && (marker_pos.top < container_hh) ){
			console.log("top right");

			// toggle lines and content opening/closing
			// line1 
			$(this).next('.line1').css({"right":marker_w,"top":marker_hh,"width":(content_w / 2)})
			.show("slide",{ direction: "right" },"slow", function(){
				
				var line1_w = $(this).width();
				var line1_h = $(this).height();
				
				// line2
				$(this).next('.line2').css({"right":(-line1_w),"top":marker_hh-line1_h,"height":marker_h})
				.show("slide",{ direction: "up" },"slow", function(){
					
					var line2_w = $(this).width();
					var line2_h = $(this).height();
					
					// content
					$(this).next('.content').css({"right":(line1_w),"top":(line2_h / -2)-line1_h} )
					.show("slide",{ direction: "up" },"slow")

				});
				
			});
			
			$('.active').removeClass('active');
			$(this).addClass("active");
		};
		
		
		// bottom left quadrant
	   if( (marker_pos.left <  container_hw) && (marker_pos.top > container_hh) ){
			console.log("bottom left");

			// toggle lines and content opening/closing
			// line1 
			$(this).next('.line1').css({"left":marker_w,"top":marker_hh,"width":(content_w / 2)})
			.show("slide",{ direction: "left" },"slow", function(){
				
				var line1_w = $(this).width();
				var line1_h = $(this).height();
				
				// line2
				$(this).next('.line2').css({"left":(marker_w + line1_w),"top":marker_hh-line1_h,"height":marker_h})
				.show("slide",{ direction: "up" },"slow", function(){
					
					var line2_w = $(this).width();
					var line2_h = $(this).height();
					
					// content
					$(this).next('.content').css({"left":(line1_w),"top":(line2_h / -2)-line1_h} )
					.show("slide",{ direction: "up" },"slow")

				});
				
			});
			
			$('.active').removeClass('active');
			$(this).addClass("active");
		};
		
		
		// bottom right quadrant
	   if( (marker_pos.left >  container_hw) && (marker_pos.top > container_hh) ){
			console.log("bottom right");

			// toggle lines and content opening/closing
			// line1 
			$(this).next('.line1').css({"left":marker_w,"top":marker_hh,"width":(content_w / 2)})
			.show("slide",{ direction: "left" },"slow", function(){
				
				var line1_w = $(this).width();
				var line1_h = $(this).height();
				
				// line2
				$(this).next('.line2').css({"left":(marker_w + line1_w),"top":marker_hh-line1_h,"height":marker_h})
				.show("slide",{ direction: "up" },"slow", function(){
					
					var line2_w = $(this).width();
					var line2_h = $(this).height();
					
					// content
					$(this).next('.content').css({"left":(line1_w),"top":(line2_h / -2)-line1_h} )
					.show("slide",{ direction: "up" },"slow")

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