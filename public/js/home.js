$(window).on("load", function() {


	
	//set height of border
	function borderHeight() {
		var height = $(".row.border-between").height();
		var result = height+"px";

		if (window.matchMedia('(max-width: 768px)').matches) {
			$("#home").append("<style>.border-between > [class*='col-']:before {height: 0px;}</style>");
		} else {
			$("#home").append("<style>.border-between > [class*='col-']:before {height: "+result+";}</style>");
		}
	}
	
	function headerHeight() {
		var headerHeight = $("#featuredCarousel").height();
		var itemHeight = $("#featuredCarousel .item.active img").height();
		if (headerHeight > itemHeight) {
			$('#featuredCarousel').css("height", itemHeight);
		}
		else if (itemHeight > headerHeight) {
			$('#featuredCarousel').css("height", "450px");
		}
		else {
			headerHeight = 450;
		}
	}
	
	// set height of border on page load and resize
	borderHeight();
	$( window ).resize(function() {
		borderHeight();
	});
	
	headerHeight();
	$( window ).resize(function() {
		headerHeight();
	});
});