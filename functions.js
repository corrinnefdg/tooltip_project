// JavaScript Document

// http://jsbin.com/cokeb/15/edit
$(document).ready(function(){

	var last_quadrant = '';

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
		// need to make unique direction to each quadrant
		if ($(this).hasClass('active')) return;

		$('#overlay').fadeIn();

		close_last_popup();

		var content_h = $(this).nextAll('.content').height();
		var content_w = $(this).nextAll('.content').width();

		// top left quadrant
		if( (marker_pos.left < container_hw) && (marker_pos.top < container_hh) ){
			console.log("top left");

			// toggle lines and content opening/closing
			// line1
			$(this).next('.line1')
			.css({"left":marker_w,"top":(marker_h / 2),"width":(content_w / 2),"height":2,"z-index":50})
			.show("slide",{ direction: "left" },"slow", function(){

				var line1_w = $(this).width();
				var line1_h = $(this).height();

				// line2
				$(this).next('.line2')
				.css({"left":(marker_w + line1_w -2),"top":(marker_h / 2),"height":marker_h,"width":2,"z-index":50})
				.show("slide",{ direction: "up" },"slow", function(){

					var line2_w = $(this).width();
					var line2_h = $(this).height();

					// content
					$(this).next('.content')
					.css({"left":(marker_w),"top":((marker_h / 2) + line2_h),"z-index":50} )
					.show("slide",{ direction: "up" },"slow")
					.addClass("closeBox");
				});
			});
			last_quadrant = 'top left';
		}

		// top right quadrant
		if( (marker_pos.left > container_hw) && (marker_pos.top < container_hh) ){
			console.log("top right");

			// toggle lines and content opening/closing
			// line1
			$(this).next('.line1')
			.css({"right":(marker_w),"top":(marker_h / 2),"width":(content_w / 2),"height":2,"z-index":50})
			.show("slide",{ direction: "right" },"slow", function(){

				var line1_w = $(this).width();
				var line1_h = $(this).height();

				// line2
				$(this).next('.line2')
				.css({"right":(marker_w + line1_w),"top":(marker_h / 2),"height":marker_h,"width":2,"z-index":50})
				.show("slide",{ direction: "up" },"slow", function(){

					var line2_w = $(this).width();
					var line2_h = $(this).height();

					// content
					$(this).next('.content')
					.css({"right":(marker_w),"top":((marker_h / 2) + line2_h),"z-index":50})
					.show("slide",{ direction: "up" },"slow")
					.addClass("closeBox");
				});
			});
			last_quadrant = 'top right';
		}

		// bottom left quadrant
		if( (marker_pos.left < container_hw) && (marker_pos.top > container_hh) ){
			console.log("bottom left");

			// toggle lines and content opening/closing
			// line1
			$(this).next('.line1')
			.css({"left":(marker_w / 2),"bottom":(marker_h),"height":(content_h / 2),"width":2,"z-index":50})
			.show("slide",{ direction: "down" },"slow", function(){
				var line1_w = $(this).width();
				var line1_h = $(this).height();

				// line2
				$(this).next('.line2')
				.css({"left":(marker_w / 2),"bottom":(marker_h + line1_h),"width":(marker_w * 4),"height":2,"z-index":50})
				.show("slide",{ direction: "left" },"slow", function(){

					var line2_w = $(this).width();
					var line2_h = $(this).height();

					// content
					$(this).next('.content')
					.css({"left":((marker_w / 2) + line2_w),"bottom":(marker_h),"z-index":50})
					.show("slide",{ direction: "left" },"slow")
					.addClass("closeBox");
				});
			});
			last_quadrant = 'bottom left';
		}

		// bottom right quadrant
		if( (marker_pos.left > container_hw) && (marker_pos.top > container_hh) ){
			console.log("bottom right");

			// toggle lines and content opening/closing
			// line1
			$(this).next('.line1')
			.css({"right":(marker_w / 2),"bottom":(marker_h),"height":(content_h / 2),"width":2,"z-index":50})
			.show("slide",{ direction: "down" },"slow", function(){

				var line1_w = $(this).width();
				var line1_h = $(this).height();

				// line2
				$(this).next('.line2')
				.css({"right":(marker_w / 2),"bottom":(line1_h + marker_h),"width":(marker_w * 4),"height":2,"z-index":50})
				.show("slide",{ direction: "right" },"slow", function(){

					var line2_w = $(this).width();
					var line2_h = $(this).height();

					// content
					$(this).next('.content')
					.css({"right":((marker_w / 2) + line2_w),"bottom":(marker_h),"z-index":50} )
					.show("slide",{ direction: "right" },"slow")
					.addClass("closeBox");
				});
			});
			last_quadrant = 'bottom right';
		}
		$('.active').removeClass('active');
		$(this).addClass("active");
	}); // end on click

	// close popup when "close" button clicked
	$('.close').click(function(e){
		e.preventDefault();

		$('#overlay').fadeOut();

		close_last_popup();

		$('.active').removeClass('active');
		$("#container").children('#overlay').fadeOut();
	});

	function close_last_popup()
	{
		switch(last_quadrant)
		{
			case 'top left':
				$('.closeBox').hide('slide',{direction: 'up'},function(){
					$(this).prev().hide('slide',{direction:'up'},function(){
						$(this).prev().hide('slide',{direction:'left'});
					});
				});
				break;
			case 'top right':
				$('.closeBox').hide('slide',{direction: 'up'},function(){
					$(this).prev().hide('slide',{direction:'up'},function(){
						$(this).prev().hide('slide',{direction:'right'});
					});
				});
				break;
			case 'bottom left':
				$('.closeBox').hide('slide',{direction: 'left'},function(){
					$(this).prev().hide('slide',{direction:'left'},function(){
						$(this).prev().hide('slide',{direction:'down'});
					});
				});
				break;
			case 'bottom right':
				$('.closeBox').hide('slide',{direction: 'right'},function(){
					$(this).prev().hide('slide',{direction:'right'},function(){
						$(this).prev().hide('slide',{direction:'down'});
					});
				});
				break;
		}
	}
}); //end document.ready