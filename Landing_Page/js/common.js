$(document).ready(function () {
    // Нажатие на кнопку меню
    $(".btn").click(function () {
        $(".btn").toggleClass("trigger");
        if ($('.top_mnu').is(':hidden')) {
            $('.top_mnu').fadeIn(600);
            $('.top_mnu li a').addClass('fadeInUp animated');
        } else {
            $('.top_mnu').fadeOut(600);
            $('.top_mnu li a').removeClass('fadeInUp animated');
        };
    });
    // Нажатие на ссылки меню
    $('.top_mnu li a').click(function () {
        $('.top_mnu').fadeOut(600);
        $('.top_mnu li a').removeClass('fadeInUp animated');
        $(".btn").toggleClass("trigger");
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
    });
});

// При скроле элементы резюме вылетают с боков
$(window).scroll(function () {
    slide();
});

// При загрузки окна страницы включение прелоадера и анимации текста в шапке
$(window).load(function () {
    $('.loader_inner').fadeOut();
    $('.loader').delay(400).fadeOut("slow");
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('.title').children().addClass('anim_delay ' + animationEnd).one(animationEnd, function () {
        $('.title').children().removeClass('anim_delay ' + animationEnd);
    });
});

function slide() {
    $('.work').each(function () {
        var ths = $(this);
        if (($(window).scrollTop() + $(window).height()) > (ths.offset().top + (ths.height()/2)))
            ths.addClass('anim_run');
    });
    $('.study').each(function () {
        var ths = $(this);
        if (($(window).scrollTop() + $(window).height()) > (ths.offset().top + (ths.height()/2)))
            ths.addClass('anim_run');
    });
    $('.s_about .animated').each(function () {
        var ths = $(this);
        if (($(window).scrollTop() + $(window).height()) > (ths.offset().top + (ths.height()/2)))
            ths.addClass('anim_run');
    });
};

//function clear_slide() {
//    $('.work').each(function () {
//        var ths = $(this);
//        if ($(window).scrollTop() > (ths.parents('.s_resume').offset().top + ths.parents('.s_resume').height()))
//            ths.removeClass('anim_run');
//    });
//};