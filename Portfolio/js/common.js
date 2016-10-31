$('.img').css('display', 'none');
$('.cont').css('display', 'none');

$(document).ready(function () {

    //MyParallax
    $('.parallax').MyParallax();
    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({
        until: austDay,
        format: 'yowdHMS'
    });

    //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox();

    //Навигация по Landing Page
    //$(".top_mnu") - это верхняя панель со ссылками.
    //Ссылки вида <a href="#contacts">Контакты</a>
    $(".top_mnu").navigation();

    //Добавляет классы дочерним блокам .block для анимации
    //Документация: http://imakewebthings.com/jquery-waypoints/
    $(".block").waypoint(function (direction) {
        if (direction === "down") {
            $(".class").addClass("active");
        } else if (direction === "up") {
            $(".class").removeClass("deactive");
        };
    }, {
        offset: 100
    });

    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
    $("a.scroll").click(function () {
        $.scrollTo($(".div"), 800, {
            offset: -90
        });
    });

    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        items: 4
    });
    owl.on("mousewheel", ".owl-wrapper", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_button").click(function () {
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function () {
        owl.trigger("owl.prev");
    });

    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function () {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });

    $('.menu_icon').click(function () {
        $(this).next().slideToggle();
    });

    $('.img').fadeIn(1500);
    $('.cont').fadeIn(1500);
    
    $('.fullscrin').css('padding-top', ($(window).height() - ($('.nav').height() + Number($('.nav').css('padding-top').replace("px", "")) * 2))/2);
    $('.fullscrin').css('padding-bottom', ($(window).height() - ($('.nav').height() + Number($('.nav').css('padding-top').replace("px", "")) * 2))/2);
    $('.section').css('padding-top', ($(window).height() - $('.text_centr').height()) / 2 - 16.08);
    $('.section').css('padding-bottom', ($(window).height() - $('.text_centr').height()) / 2 -16.08);
    
});
    
$(window).scroll(function(){
    if (scrollY > 100){
        $('.nav').css({ 
            'padding': '0',
            'height': '50px'  
        });
    }
    if (scrollY <= 100){
        $('.nav').css({ 
            'padding': '23px 0',
            'height': '100px'  
        });
    }
    _opacity();
});

$(window).resize(function () {
    $('.fullscrin').css('padding-top', ($(window).height() - ($('.nav').height() + Number($('.nav').css('padding-top').replace("px", "")) * 2))/2);
    $('.fullscrin').css('padding-bottom', ($(window).height() - ($('.nav').height() + Number($('.nav').css('padding-top').replace("px", "")) * 2))/2);
    $('.section').css('padding-top', ($(window).height() - $('.text_centr').height()) / 2 - 16.08);
    $('.section').css('padding-bottom', ($(window).height() - $('.text_centr').height()) / 2 - 16.08);
});

function _opacity () {
    var s = Number($('.section').css('padding-bottom').replace('px', '')) + $('.section').height(); //padding-bottom теста + высота
    var z = s - scrollY - 100; //растояние затухания
    var opacity = 1;
    if (z < 0)
        opacity = 0
    else
        opacity = z * 2 / 1000;
    $('.section').css('opacity', opacity);
};