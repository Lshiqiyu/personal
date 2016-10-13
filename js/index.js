/**
 * Created by admin on 2016/9/4.
 */
/*初始化fullpage*/
$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            //using index
            if(index == 2){
                $(".boy").css({"animation":"photo 2s "})
                $(".pmes").css({"animation":"pme 2s "})
            }
            else{
                $(".boy").css({"animation":"photoe 1s "})
                $(".pmes").css({"animation":"pmee 1s "})
            }
            if(index == 3){
                $(".shtml").css({"animation":"skill 2s"})
                $(".scss").css({"animation":"skill 2s"})
                $(".sjs").css({"animation":"skill 2s"})
                $(".sangular").css({"animation":"skill 2s"})


            }
            else{
                $(".shtml").css({"animation":"skillt 1s"})
                $(".scss").css({"animation":"skillt 1s"})
                $(".sjs").css({"animation":"skillt 1s"})
                $(".sangular").css({"animation":"skillt 1s"})

            }



        }
    });
   $(".zi1").on("click",function(){
        $.fn.fullpage.moveTo(2);

    })
   $(".zi2").on("click",function(){
     $.fn.fullpage.moveTo(3);

    })
   $(".zi3").on("click",function(){
        $.fn.fullpage.moveTo(4);

    })
   $(".zi4").on("click",function(){
        $.fn.fullpage.moveTo(5);

    })
    $(".con .smli li").eq(0).on("click",function(){
        $.fn.fullpage.moveTo(2);
    })
    $(".con .smli li").eq(1).on("click",function(){
        $.fn.fullpage.moveTo(3);
    })
    $(".con .smli li").eq(2).on("click",function(){
        $.fn.fullpage.moveTo(4);
    })
    $(".con .smli li").eq(3).on("click",function(){
        $.fn.fullpage.moveTo(5);
    })



















//响应式
    function nav() {
        var flag=true;
        $(".topbanner .head .btn .cc ").on("click",function () {

            if(flag){
                $(".topbanner .con .circle").css({"transform":"scale(1,1)", "transition":"all 1s 0.5s"
            })
                $(".topbanner .con").css({"transform":"scale(1,1)",    "transition":"all 1s"
            })
                $(".con .smli li").css({"padding-left":"10px"})
                console.log($(".topbanner .con .circle"))
                $(this).children(".line1").css({"transform":" translate(0,8px) rotate(45deg) " })
                $(this).children(".line2").css("opacity","0")
                $(this).children(".line3").css({"transform":"translate(0,-7px) rotate(-45deg)" })


                flag=false;
            }else{
                $(this).children(".line1").css({"transform":" translate(0,0) rotate(0) " })
                $(this).children(".line2").css("opacity","1")
                $(this).children(".line3").css({"transform":"translate(0,0) rotate(0)"})
                $(".topbanner .con .circle").css({"transform":"scale(0,0)", "transition":"all 1s " })
                $(".topbanner .con").css({"transform":"scale(0,0)","transition":"all 1s 0.5s"})
                $(".con .smli li").css({"padding-left":"500px"})
                flag=true;
            }

        })
    }
    nav();
// $(".topbanner .head .btn").on("click",function () {
//
// })

    /*飘雪*/
    $(function(){
        $.fn.snow({
            minSize: 5,		//雪花的最小尺寸
            maxSize: 50, 	//雪花的最大尺寸
            newOn: 1000		//雪花出现的频率 这个数值越小雪花越多
        });
    });



//作品
    $(".imgBox").eq(0).hover(function () {
        $(this).find("a").css({"transform":"scale(0)  "})
        $(this).find(".zhezhao").css({"transform":"rotate(-360deg) scale(1,1)","display":"block"})
    },function () {
        $(this).find("a").css({"transform":"scale(1)  "})
        $(this).find(".zhezhao").css({"transform":"rotate(0) scale(0,0)","display":"block"})

    })
    $(".imgBox").eq(1).hover(function () {
        $(this).find("a").css({"transform":"scale(0)  "})
        $(this).find(".zhezhao").css({"transform":"rotate(-360deg) scale(1,1)","display":"block"})
    },function () {
        $(this).find("a").css({"transform":"scale(1)  "})
        $(this).find(".zhezhao").css({"transform":"rotate(0) scale(0,0)","display":"block"})

    })
    $(".imgBox").eq(2).hover(function () {
        $(this).find("a").css({"transform":"scale(0)  "})
        $(this).find(".zhezhao").css({"transform":"rotate(-360deg) scale(1,1)","display":"block"})
    },function () {
        $(this).find("a").css({"transform":"scale(1)  "})
        $(this).find(".zhezhao").css({"transform":"rotate(0) scale(0,0)","display":"block"})

    })



//作品展示
    $(".webShow").on("click",function(){
        $(".gudingshowW").css({"display":"block"})
    })

        $(".close").on("click",function(){

        $(".gudingshowW").css({"display":"none"})
            $(".gudingshowa").css({"display":"none"})
            $(".gudingshowg").css({"display":"none"})


        })

    $(".appShow").on("click",function(){
        $(".gudingshowa").css({"display":"block"})
    })

    $(".gameShow").on("click",function(){
        $(".gudingshowg").css({"display":"block"})
    })








});












