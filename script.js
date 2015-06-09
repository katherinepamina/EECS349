$(document).ready(function() {
	$.fn.scrollView = function () {
	    return this.each(function () {
	        $('html, body').animate({
	            scrollTop: $(this).offset().top - 150
	        }, 1000);
    	});
	}
});