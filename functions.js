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
			var marker_hh = marker_h / 2;
			
		var marker_w = $(this).width();
			var marker_hw = marker_w / 2;


        // close any content boxes already open
        // need to reverse order...
        // also make unique direction to each quadrant
        if ($(this).hasClass('active')) return;
      
		$('.active').next().slideUp("fast","linear", function() {
			$(this).next().slideUp("fast","linear", function() {
				$(this).next().slideUp("fast","linear");
			});
		}); 
		
		// trying to reverse the closing order
		/*$('.active').nextAll('.content').slideUp("slow","linear", function() {
			$('.active').nextAll('.line2').slideUp("slow","linear", function() {
				$('.active').nextAll('.line1').slideUp("slow","linear");
			});
		});*/


		// top left quadrant
		if( (marker_pos.left < container_hw) && (marker_pos.top < container_hh) ){
			console.log("top left");
			
			var content_h = $(this).nextAll('.content').height();
			console.log(content_h);
			var content_w = $(this).nextAll('.content').width();
			console.log(content_w);

			// toggle lines and content opening/closing
			// line1 
			$(this).next('.line1').css({"left":marker_w,"top":(marker_h / 2),"width":(content_w / 2),"height":2})
			.show("slide",{ direction: "left" },"slow", function(){
				
				var line1_w = $(this).width();
				var line1_h = $(this).height();
				
				// line2
				$(this).next('.line2').css({"left":(marker_w + line1_w -2),"top":(marker_h / 2),"height":marker_h,"width":2})
				.show("slide",{ direction: "up" },"slow", function(){
					
					var line2_w = $(this).width();
					var line2_h = $(this).height();
					
					// content
					$(this).next('.content').css({"left":(marker_w),"top":((marker_h / 2) + line2_h)} )
					.show("slide",{ direction: "up" },"slow");

				});
				
			});
			
			$('.active').removeClass('active');
			$(this).addClass("active");
		}


        // top right quadrant
		if( (marker_pos.left > container_hw) && (marker_pos.top < container_hh) ){
			console.log("top right");
			
			var content_h = $(this).nextAll('.content').height();
			console.log(content_h);
			var content_w = $(this).nextAll('.content').width();
			console.log(content_w);

			// toggle lines and content opening/closing
			// line1 
			$(this).next('.line1').css({"right":(marker_w),"top":(marker_h / 2),"width":(content_w / 2),"height":2})
			.show("slide",{ direction: "right" },"slow", function(){
				
				var line1_w = $(this).width();
				var line1_h = $(this).height();
				
				// line2
				$(this).next('.line2').css({"right":(marker_w + line1_w),"top":(marker_h / 2),"height":marker_h,"width":2})
				.show("slide",{ direction: "up" },"slow", function(){
					
					var line2_w = $(this).width();
					var line2_h = $(this).height();
					
					// content
					$(this).next('.content').css({"right":(marker_w),"top":((marker_h / 2) + line2_h)})
					.show("slide",{ direction: "up" },"slow");

				});
				
			});
			
			$('.active').removeClass('active');
			$(this).addClass("active");
		}
		
		
		// bottom left quadrant
        if( (marker_pos.left < container_hw) && (marker_pos.top > container_hh) ){
			console.log("bottom left");
			
			var content_h = $(this).nextAll('.content').height();
			console.log(content_h);
			var content_w = $(this).nextAll('.content').width();
			console.log(content_w);

			// toggle lines and content opening/closing
			// line1 
			$(this).next('.line1').css({"left":(marker_w / 2),"bottom":(marker_h),"height":(content_h / 2),"width":2})
			.show("slide",{ direction: "down" },"slow", function(){
				
				
				var line1_w = $(this).width();
				var line1_h = $(this).height();
				
				// line2
				$(this).next('.line2').css({"left":(marker_w / 2),"bottom":(marker_h + line1_h),"width":marker_w,"height":2})
				.show("slide",{ direction: "left" },"slow", function(){
					
					var line2_w = $(this).width();
					var line2_h = $(this).height();
					
					// content
					$(this).next('.content').css({"left":((marker_w / 2) + line2_w),"bottom":(marker_h)})
					.show("slide",{ direction: "left" },"slow");

				});
				
			});
			
			$('.active').removeClass('active');
			$(this).addClass("active");
		}
		
		
		// bottom right quadrant
        if( (marker_pos.left > container_hw) && (marker_pos.top > container_hh) ){
			console.log("bottom right");
			
			var content_h = $(this).nextAll('.content').height();
			console.log(content_h);
			var content_w = $(this).nextAll('.content').width();
			console.log(content_w);

			// toggle lines and content opening/closing
			// line1 
			$(this).next('.line1').css({"right":(marker_w / 2),"bottom":(marker_h),"height":(content_h / 2),"width":2})
			.show("slide",{ direction: "down" },"slow", function(){
				
				var line1_w = $(this).width();
				var line1_h = $(this).height();
				
				// line2
				$(this).next('.line2').css({"right":(marker_w / 2),"bottom":(line1_h + marker_h),"width":marker_w,"height":2})
				.show("slide",{ direction: "right" },"slow", function(){
					
					var line2_w = $(this).width();
					var line2_h = $(this).height();
					
					// content
					$(this).next('.content').css({"right":((marker_w / 2) + line2_w),"bottom":(marker_h)} )
					.show("slide",{ direction: "right" },"slow");

				});
				
			});
			
			$('.active').removeClass('active');
			$(this).addClass("active");
		}

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