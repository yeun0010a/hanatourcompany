$(function(){

$("#menu").slicknav();
// pc 슬라이드 업다운
$("#menu>li,#menu>li>ul, #smenu_bar").mouseover(function(){
    $("#menu>li>ul, #smenu_bar").stop().slideDown("fast");  
});
$(".nav, #smenu_bar").mouseleave(function(){
    $("#menu>li>ul, #smenu_bar").stop().slideUp("fast");  
});


});