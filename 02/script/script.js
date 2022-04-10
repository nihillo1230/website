$(document).ready(function(){
    $("header nav ul.gnb>li").mouseover(function(){
        $(this).find("ul.sub").stop().slideDown();
    });
    $("header nav ul.gnb>li").mouseout(function(){
        $(this).find("ul.sub").stop().slideUp();
    });

    var slide=$(".slide li");
    var sno=0;
    var lastno=slide.length-1;
    function playSlide(){
        $(slide[sno]).animate({
            "left":"-1200px"
        },1000,function(){
            $(this).css({"left":"1200px"});
        });
        sno++;
        if(sno>lastno) sno=0;
        $(slide[sno]).animate({
            "left":"0px"
        },1000);
    }
    setInterval(function(){
        playSlide();
    },2000);





});