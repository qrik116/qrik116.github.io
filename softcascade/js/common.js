$(document).ready(function() {

	$('.menu-btn').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('open');
	});

	// Карусель
	var owl = $("#slide-companies");
	owl.owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		pagination: true,
		autoPlay: 5000,
		touchDrag: false,
		mouseDrag: false
	});

	$('.main_footer .title').on('click', function(event) {
		event.preventDefault();
		$(this).next().toggle(400);
		$(this).parents('nav').parent().next().find('.title').toggleClass('bd-top');
	});
});