
$(function(){
$('.panel').hover(function(){
        $(this).find('.panel-footer').slideDown(550);
    },function(){
        $(this).find('.panel-footer').slideUp(550); //.fadeOut(205)
    });
});








$(function() {


  function loop(){
   $('.icon')
     .animate({marginTop:15},1000)
     .animate({marginTop:2},1000, loop);
  }

  loop(); // call this wherever you want

  $('.icon').hover(
   function() {
    $(this).stop(true, true).animate({marginTop: '15px'},1000000000);
    },
    function() {$(this).delay(1000).animate({marginTop: '2px'},10000000);
    return false;
  });
});
