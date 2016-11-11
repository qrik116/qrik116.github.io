(function ($) {
    $.fn.MyParallax = function () {

        return this.each(function () {

            var ths = $(this);
            ths
                .css({
                    'height': '80vh',
                    'position': 'relative',
                    'overflow': 'hidden',
                    'width': '100%',
                })
                .append("<img src='" + ths.data('image-parallax') + "' alt='alt' style='position: absolute;width: 100%;'>");

            function parallaxInit() {
                
                if($(window).width()>1660){
                    ths.css('height', '80vh');
                }
                if($(window).width()<=1660){
                    ths.css('height', '70vh');
                }
                if($(window).width()<=1450){
                    ths.css('height', '45vh');
                }
                if($(window).width()<=1094){
                    ths.css('height', '29vh');
                }
                if($(window).width()<=859){
                    ths.css('height', '20vh');
                }
                if($(window).width()<=405){
                    ths.css('height', '16vh');
                }

                var pheight = ths.height();
                var iheight = ths.children("img").height();
                var razn = iheight - (pheight / 2);

                ths.children("img").css('top', -razn);

                var st = $(document).scrollTop();
                var sp = ths.offset().top - $(window).height();
                var ob = ths.offset().top + pheight;
                var sr = (st - sp);

                if (st >= sp && st <= ob) {
                    ths.children("img").css({
                        '-webkit-transform': 'translate3d(0px, ' + sr / 20 + '%, 0px)',
                        'transform': 'translate3d(0px, ' + sr / 20 + '%, 0px)'
                    });
                }
            };
            $(window).scroll(function () {
                parallaxInit();
            });
            $(document).ready(function () {
                parallaxInit();
            });
            $(window).resize(function () {
                parallaxInit();
            });
        });
    };
})(jQuery);