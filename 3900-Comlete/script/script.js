$(document).ready(function(){
    $("ul.gnb>li").hover(function(){
        $("ul.sub").stop().slideDown();
        $(".nav_bg").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
        $(".nav_bg").stop().slideUp();
    });

    var slide=$(".slide li");
    var sno=0;
    var lastno=slide.length-1;
    function playSlide(){
        $(slide[sno]).animate({
            "left":"1200px"
        },1000,function(){
            $(this).css({"left":"-1200px"});
        });
        sno++;
        if(sno>lastno) sno=0;
        $(slide[sno]).animate({
            "left":"0"
        },1000);
    }

    setInterval(function(){
        playSlide();
    },2000);

});

