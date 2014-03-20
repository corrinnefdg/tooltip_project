$(document).ready(function()
{
	$('.marker').click(function(){
		// finding location of target marker (four quadrants to determine where popup goes)
		var marker_pos = $(this).parent().position();
		// get container measurements and half measurements for easy variables
		var container_h = $("#container").height();
		var half_h = container_h / 2;
		var container_w = $("#container").width();
		var half_w = container_w / 2;

		$('.active').next().slideUp("fast","linear", function() {
			$(this).next().slideUp("fast","linear", function() {
				$(this).next().slideUp("fast","linear");
			});
		});

		if( (marker_pos.left < half_w) && (marker_pos.top < half_h) ){
			console.log("top left");

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
			$(this).next().slideDown("fast","linear", function() {
				$(this).next().slideDown("fast","linear", function() {
					$(this).next().slideDown("fast","linear");
				});
			});
			$('.active').removeClass('active');
			$(this).addClass("active");
		};
	});
});
