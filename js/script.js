/*BANNER */
$(".fade-slider").jdSlider({
    isSliding: false,
    isAuto: true,
    isLoop: true,
    isDrage: false,
    interval: 5000,
    isCursor: false,
    speed: 3000
});

var alturaBanner = $(".fade-slider").height();
$(".bannerEstatico").css({
    "height":alturaBanner+"px"
})

$(window).scroll(function(){
        var posY = window.pageYOffset
        if (posY > alturaBanner) {
            $("header").css({
                "background":"white"
            })
            $("header .logotipo").css({
                "filter":"invert(100%)"
            })
            $(".fa-bars, .fa-magnifying-glass").css({
                "color":"black"
            })
        } else {
            $("header").css({
                "background":"rgba(0,0,0,0.5)"
            })
            $("header .logotipo").css({
                "filter":"invert(0%)"
            })
            
            $(".fa-bars, .fa-magnifying-glass").css({
                "color":"white"
            })
        }
    }
)
$(".fa-bars").click(
    function(){
        $(".menu").fadeIn("fast");
}
)
$(".btnClose").click(
    function(){
        $(".menu").fadeOut("fast")
    ;}
)

/**
 * GRID CATEGORIAS
 * 
 */
$(".grid figure").mouseover(
    function () { 
        $(this).css({
            "background-position":"right bottom"
        })
    }
)

$(".grid figure").mouseout(
    function () { 
        $(this).css({
            "background-position":"left top"
        })
    }
)