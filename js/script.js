$(function(){
// 메뉴
$(".pcBigMenu, .subMenu>li").mouseenter(function(){
    $('.subMenu>li').stop().slideDown(200);
    $('.subMenuBG').stop().slideDown(200);
});
$(".pcBigMenu, .subMenu>li").mouseleave(function(){
    $('.subMenu>li').stop().slideUp(200);
    $('.subMenuBG').stop().slideUp(200);
});


});