window.onload = function(){
    $('.main_txt01 span').addClass('active');
    $('.menu-tap .left').addClass('active');
    console.log('start');
}

$('.menu-tap div').on('click',function(){
    $('.menu-tap > div').removeClass('active');
    $(this).addClass('active');
})

/* 버거메뉴 */

$('.right').on('click',function(){
    // $(this).addClass('on');
    $('.burger').addClass('active');

})
$('.more_view').on('click',function(){
    $('.grid-sort-container').fadeIn(0);
    console.log(3);
})
$('.burger .close').on('click',function(){
    $('.burger').removeClass('active');
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('aside').fadeIn(200);
    } else {
        $('aside').fadeOut(200);
    }
});

$('aside').click(function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
});
$('.bur_main .wrap  .mo .en-txt').on('click',function(){
    $(this).toggleClass('on');
})
$('.bur_main .wrap .menu .en-txt').on('click',function(){
    $('.bur_main .wrap .menu ul').toggleClass('active');
    $(this).toggleClass('on');
})
$('.bur_main .wrap  .event .en-txt').on('click',function(){
    $('.bur_main .wrap  .event ul').toggleClass('active');
    $(this).toggleClass('on');
})
$('.bur_main .wrap  .community .en-txt').on('click',function(){
    $('.bur_main .wrap  .community ul').toggleClass('active');
    $(this).toggleClass('on');
})
$('.bur_main .wrap .franchise .en-txt').on('click',function(){
    $('.bur_main .wrap  .franchise ul').toggleClass('active');
    $(this).toggleClass('on');
})






