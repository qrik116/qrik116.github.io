$(document).ready(function () {
	wrapper_top();
	footer_b();
});

$(window).resize(function() {
	wrapper_top();
	footer_b();
});

function wrapper_top() {
	var h = (($(window).height()-$('header').height()-$('footer').height())/2+$('.header').height())-$('.top_wrapper').height()/2;
	if (h <= 0)
		$('.top_wrapper').css('margin-top', '0');
	else
		$('.top_wrapper').css('margin-top', h+'px');
}
function footer_b(){
	if ($(window).height() < 708)
		$('footer').css('bottom', 'inherit');
	else
		$('footer').css('bottom', '25');
}