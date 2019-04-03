$(function(){
  
    $(window).on('scroll', function() {
        if($(window).scrollTop()){
          $('header').addClass('scrolled');
        }
        else {
          $('header').removeClass('scrolled');
        }
    });
});