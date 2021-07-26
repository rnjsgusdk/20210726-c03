$(function(){

//GBN시작 세로 1열 
$(".mainli").mouseover(function(){
    $(this).children("ul.submenu").stop().slideDown(400);
});

$(".mainli").mouseout(function(){
    $(this).children("ul.submenu").stop().slideup(900);
});
//GBN끝 세로 1열 

//GBN시작 세로 2열 
$(".mainli").mouseover(function(){
    $(this).children("ul.submenu").stop().slideDown(600);
});

$(".mainli").mouseout(function(){
    $(this).children("ul.submenu").stop().fadeout(200);
});
//GBN끝 세로 2열 




});