function changeImage(selected_url) {
    $('#preview').fadeTo(500, 0, function(){
        $('#preview').attr('src', selected_url);
        $('#preview').fadeTo(500, 1);
    });
}

/*function animate_bigcard() {
    setTimeout(function(){
        $('.big_card img').animate({borderTopLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, borderBottomLeftRadius: 100}, 1000, function(){
            $('.big_card img').animate({borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}, 1000);
        });
    }, 1000);
}*/

function get_name_browser(){
    // получаем данные userAgent
    var ua = navigator.userAgent;    
    // с помощью регулярок проверяем наличие текста,
    // соответствующие тому или иному браузеру
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    // условий может быть и больше.
    // сейчас сделаны проверки только 
    // для популярных браузеров
    return 'Не определен';
}

$(document).ready(function(){
    /*if (get_name_browser()=='Firefox'){
        $('table p').css('height', 121)//11
    };*/
    
    $('.icon_menu').click(function(){
        $(this).next().slideToggle();
    });
    var sub_marginleft = $('input[type=submit]').css('margin-left');
    var sub_width = $('input[type=submit]').css('width');
    var select_width = $('select').css('width');
    
    
    $('#img').fadeTo(1000, 0.3, function () {
        $('html, body').animate({scrollTop: $('nav').offset().top}, 1000);
    });
    
    $('input[type=submit]').mouseover(function(){
        $(this).animate({marginLeft: 0, width: select_width}, 1000);
    });
    
    $('input[type=submit]').mouseleave(function(){
        $(this).stop(true);
        $(this).animate({marginLeft: sub_marginleft, width: sub_width}, 1000);
    });
});