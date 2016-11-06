$(window).scroll(function () {
    if (scrollY > ($(window).height() - 100)) {
        $('.nav').css('top', '-200px');
    }
    if (scrollY < ($(window).height() - 100)) {
        $('.nav').css('top', '0');
    }
    _opacity();
});

function _opacity () {
    var s = Number($('.section').css('padding-bottom').replace('px', '')) + $('.section').height(); //padding-bottom теста + высота
    var z = s - $(window).scrollTop() - 100; //растояние затухания
    var opacity = 1;
    if (z < 0)
        opacity = 0
    else
        opacity = z * 2 / 1000;
    $('.section').css('opacity', opacity);
};