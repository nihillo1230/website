$(document).ready(function(){
    $("header nav ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().show();
    },function(){
        $(this).find("ul.sub").stop().hide();
    });

    $(".slide li").eq(0).siblings().hide();
    var sno=0;
    setInterval(function(){
        if(sno<2){
            sno++;
        }else{
            sno=0;
        }
        $(".slide li").eq(sno).siblings().fadeOut(500);
        $(".slide li").eq(sno).fadeIn(500);
    },2000);
});