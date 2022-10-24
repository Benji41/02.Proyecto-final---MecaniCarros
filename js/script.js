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



$(window).scroll(function(){
        var posY = window.pageYOffset
        if (posY > $(".fade-slider").height()) {
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
$(".grid figure, .gridFooter figure").mouseover(
    function () { 
        $(this).css({
            "background-position":"right bottom"
        })
    }
)

$(".grid figure , .gridFooter figure").mouseout(
    function () { 
        $(this).css({
            "background-position":"left top"
        })
    }
)

$(".grid figure").click(function () { 
    var vinculo = $(this).attr("vinculo");
    window.location = vinculo;
 })

 $(".gridFooter figure").click(function () { 
    var vinculo = $(this).attr("vinculo");
    window.location = vinculo;
 })

/**PAGINACION */
$(".pagination").twbsPagination({
    totalPages: 10,
    visiblePages: 4,
    first: "Primero",
    last: "Ultimo",
    prev: '<i class="fas fa-angle-left"></i>',
    next: '<i class="fas fa-angle-right"></i>'
})


//SCROLORAMA

var controller  = $.superscrollorama();
controller.addTween(".contenidoInicio .container", TweenMax.from(
    $(".contenidoInicio .container"), .5,{css:{opacity:0}}
))

//SCROLL UP
$.scrollUp({
    scrollText:"",
    scrollSpeed: 2000,
    easingType: "easeOutQuint"
})
/* PRELOAD */
$("body").css({
    "overflow-y":"hidden"
})

var cargarImg = $("img");
var cargarScript = $("script");
var cargarCSS = $("link");
var cargarVideos = $("video");
var cargarAudios = $("audio");
var valorPorcentaje =0
var incremento =0;
var numCarga =0;
var totalObjects = [];
var numItem=0 ;

totalObjects.push(cargarAudios,cargarCSS,cargarImg,cargarScript,cargarVideos)
//console.log(totalObjects);

totalObjects.forEach(functionForEach)

function functionForEach(item,index) { 
    for (let index = 0; index < item.length; index++) {
        numItem++

        valorPorcentaje = 100 / numItem
        console.log(`valor porcentaje : ${valorPorcentaje}`);
    }

    for (let index = 0; index < item.length; index++) {
        preload(index,item)
    }
   
 }
 function preload(index,item) {
    setTimeout(function () { 
        $(item[index]).ready(function(){
            numCarga++;
            incremento = Math.floor(numCarga * valorPorcentaje);

            $("#porcentajeCarga").html(incremento+"%");

            $("#rellenoCarga").css({
                "width": incremento+"%"
            });

            if(incremento >= 100){
                $("#preload").delay(350).fadeOut("slow");
                $("body").delay(350).css(
                    {
                        "overflow-y" : "scroll"
                    }
                )
            }
        })
    },index*100)
}

//console.log(`Img :${cargarImg} script: ${cargarScript} css: ${cargarCSS} videos: ${cargarVideos} audios: ${cargarAudios}`);