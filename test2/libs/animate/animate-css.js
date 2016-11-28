//Example: $('.element').animated('zoomInUp', 'zoomOutDown', delay);
(function ($) {
    $.fn.animated = function (inEffect, outEffect, delay) {
        $(this).css('opacity', '0').addClass('animated').waypoint(function (dir) {
            if (dir === 'down') {
                $(this).removeClass(outEffect).addClass(inEffect).css({'opacity': '1', 'animation-delay': delay + 's'});
            } else {
                $(this).removeClass(inEffect).addClass(outEffect).css({'opacity': '1', 'animation-delay': delay + 's'});
            };
        }, {
            offset: '80%'
        }).waypoint(function (dir) {
            if (dir === 'down') {
                $(this).removeClass(inEffect).addClass(outEffect).css({'opacity': '1', 'animation-delay': delay + 's'});
            } else {
                $(this).removeClass(outEffect).addClass(inEffect).css({'opacity': '1', 'animation-delay': delay + 's'});
            };
        }, {
            offset: -$(window).height()
        });
    };
})(jQuery);