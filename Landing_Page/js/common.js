$(document).ready(function () {
    
    $('.open_descr').magnificPopup({type:'inline'});
    
    $('#Container').mixItUp();
    
    $('.s_portfolio li').click(function () {
        $('.s_portfolio .active').removeClass('active');
        $(this).addClass('active');
    });
    
    
    // Попап плагин для фоток
    $('.popup').magnificPopup({type: 'image'});
    
    // Анимация окон
    $('.s_about .description').animated('fadeInLeft', 'fadeOutLeft', 0.2);
    $('.s_about .photo').animated('flip', '', 0.1);
    $('.s_about .pers_info').animated('fadeInRight', 'fadeOutRight', 0.6);
    $('.s_resume .work').animated('fadeInLeft', 'fadeOutLeft');
    $('.s_resume .study').animated('fadeInRight', 'fadeOutRight');
    
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
    
    $('.portfolio_grid').children().each(function (i) {
        $(this).find('a').attr('href', '#work_' + i);
        $(this).find('.descr_work').attr('id', 'work_' + i);
    });
    
});

// При загрузки окна страницы включение прелоадера и анимации текста в шапке
$(window).load(function () {
    $('.loader_inner').fadeOut();
    $('.loader').delay(400).fadeOut("slow", function () {
        $('.title h1').animated('fadeInDown', 'fadeInUp', .3);
    $('.title p, .title .line').animated('fadeInUp', 'fadeInDown', .5);
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