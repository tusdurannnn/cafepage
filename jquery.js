$(function(){
    
  var imgHeight = $('.js-mainVisual').outerHeight(); 
    //画像の高さを取得。これがイベント発火位置になる。
  var header = $('.js-header'); //ヘッダーコンテンツ

  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight) {
       //メインビジュアル内にいるので、クラスを外す。
       header.removeClass('headerColor-default');
     }else {
         $('a.nav-link').css('color','#000000');
       header.addClass('headerColor-default');
     }
  });

  
});
