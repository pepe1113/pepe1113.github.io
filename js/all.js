// 下拉式選單
// swiper banner輪播
// lightbox燈箱
// top效果

$(document).ready(function () {
    //lightbox
    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:{
            delay:3000,
        },
        loop:true,
        effect: 'fade',
            fadeEffect: {
            crossFade: true
        },
        speed:1000,
      });

    // top效果
    $('.topbtn a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500);
    });

    //下拉式選單
    $('.dropdownClick').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.dropdownList').slideToggle();
        $(this).parent().siblings().find('.dropdownList').slideUp();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('.dropdownClick').removeClass('active');
    });

    //lightbox
    lightbox.option({
        'resizeDuration': 1000,
        
      })
});