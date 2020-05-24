$(function(){
    
  var imgHeight = $('.js-mainVisual').outerHeight(); 
    //画像の高さを取得。これがイベント発火位置になる。
  var header = $('.js-header'); //ヘッダーコンテンツ

  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight) {
       //メインビジュアル内にいるので、クラスを外す。
       header.removeClass('headerColor-default');
         $('a.nav-link').css('color','#fff');
     }else {
         $('a.nav-link').css('color','#000000');
       header.addClass('headerColor-default');
         $('body,html').css('height','auto');
     }
  });
    
    $(function() {
    $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
           windowHeight = $(window).height();
         if (scroll > elemPos - windowHeight + 100){
             $(this).addClass('scrollin');
         }
        });
    });
});

});
