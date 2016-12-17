$(document).ready(function () {
    
    $('#Container').mixItUp();
    
    $('.s_portfolio li').click(function () {
        $('.s_portfolio .active').removeClass('active');
        $(this).addClass('active');
    });
    
    // Попап плагин для фоток
    $('.popup').magnificPopup({
        //delegate: 'a',
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
               this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        //closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    
    $('.open_descr').magnificPopup({
        //delegate: 'a',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
               this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    
    // Анимация окон
    $('.s_about .description').animated('fadeInLeft', 'fadeOutLeft', 0.2);
    $('.s_about .photo').animated('flip', '', 0.1);
    $('.s_about .pers_info').animated('fadeInRight', 'fadeOutRight', 0.6);
    $('.s_resume .info').animated('fadeInUp', 'fadeOutUp');
    $('.s_resume .work').animated('fadeInLeft', 'fadeOutLeft');
    $('.s_resume .study').animated('fadeInRight', 'fadeOutRight');
    
    // Нажатие на кнопку "меню"
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
        
//        var id = $(this).attr('href');
//        var top = $(id).offset().top;    Вместо этого использую Page2id
//        $('body, html').animate({
//            scrollTop: top
//        }, 1500);
    });
    $(".top_mnu a[href*='#']").mPageScroll2id();
    
    // Установка id для порфолио грид
    $('.portfolio_grid').children().each(function (i) {
        $(this).find('.hover_cont a').attr('href', '#work_' + i);
        $(this).find('.descr_work').attr('id', 'work_' + i);
    });
    
    $("input,select,textarea").jqBootstrapValidation();
    
    inspection(); // Моя функция на значки
});

// При загрузки окна страницы включение прелоадера и анимации текста в шапке
$(window).load(function () {
    $('.loader_inner').fadeOut();
    $('.loader').delay(400).fadeOut("slow", function () {
        $('.title h1').animated('fadeInDown', 'fadeInUp', .3);
    $('.title p, .title .line').animated('fadeInUp', 'fadeInDown', .5);
    });
});

// Установка значков и их цвета в зависимости от валидности данных
function inspection () {
    $('input').focusin(function () {
        if($(this).is(':focus:required:invalid')){
            $(this).parent('.controls').children('i').css({'display': 'block', 'color': 'red'});
            $(this).parent('.controls').children('i').removeClass('fa-check');
            $(this).parent('.controls').children('i').addClass('fa-times');
        }
        if($(this).is(':focus:required:valid')){
            $(this).parent('.controls').children('i').css({'display': 'block', 'color': 'green'});
            $(this).parent('.controls').children('i').removeClass('fa-times');
            $(this).parent('.controls').children('i').addClass('fa-check');
        }
    });
    $('input').focusout(function () {
        if($(this).is(':required:invalid')){
            $(this).parent('.controls').children('i').css({'display': 'block', 'color': 'red'});
            $(this).parent('.controls').children('i').removeClass('fa-check');
            $(this).parent('.controls').children('i').addClass('fa-times');
        }
        if($(this).is(':required:valid')){
            $(this).parent('.controls').children('i').css({'display': 'block', 'color': 'green'});
            $(this).parent('.controls').children('i').removeClass('fa-times');
            $(this).parent('.controls').children('i').addClass('fa-check');
        }
        if($(this).val().length == 0){
            $(this).parent('.controls').children('i').css({'display': 'none', 'color': 'black'});
            $(this).parent('.controls').children('i').removeClass('fa-times');
            $(this).parent('.controls').children('i').removeClass('fa-check');
        }
    });
}