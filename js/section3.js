$(function(){
$('.panel').hover(function(){
        $(this).find('.panel-footer').slideDown(550);
    },function(){
        $(this).find('.panel-footer').slideUp(550); //.fadeOut(205)
    });
})
