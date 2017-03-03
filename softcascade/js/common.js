$(document).ready(function() {

	$('.menu-btn').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('open');
	});

	$('.open-modal').magnificPopup({
		//delegate: 'a',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
				beforeOpen: function() {
					 this.st.mainClass = this.st.el.attr('data-effect');
				}
		},
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});

	// Ввод только чисел
	$('.input_num').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	});

	// Карусель
	var owl = $("#slide-companies");
	owl.owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		pagination: true,
		//autoPlay: 3000
	});
});