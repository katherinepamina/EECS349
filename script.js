$(document).ready(function() {
	// jQuery methods go here
	$.fn.scrollView = function () {
	    return this.each(function () {
	        $('html, body').animate({
	            scrollTop: $(this).offset().top
	        }, 1000);
    	});
	}
});