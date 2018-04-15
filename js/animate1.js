
// var dom1 = document.getElementsByClassName('head_content')
// var left = head_bg.style.left
// document.addEventListener("wheel", myFunction);

var count = 0;
var centerX = 200;
var centerY = 260;
var radius = 140;
var baseSpeed = 0.05;
var speed = 0.3;

window.onscroll = function() {
    var scrollY = window.scrollY;
    console.info(scrollY);
    if(scrollY < 500){
        var alpha = 1 - scrollY/400;
        var width_reduce = scrollY/4*3;
        var height_reduce = width_reduce/2;
        var refer_reduce = height_reduce*5/7;//相对点减少度
        // console.log('h12:'+scrollY);
        // head animate :506为不动点，1440*717高度
        if(alpha<0){
            alpha = 0
        }
        $(document).ready(function(){
            $("#main_head").fadeTo(30,alpha);
            $("#ball_nebula").animate({left: -135+width_reduce/2+'px', top: -10 + refer_reduce +'px', width: (1201-width_reduce)+'px'},20);
        });

    }




    if(scrollY < 1100){
        var scrollY = window.scrollY;
        var angle = scrollY/1100 * ( Math.PI * 2 ) ;

        var img1 = document.getElementById('content1_img1')

        var img1_left = img1.offsetLeft - centerX
        var img1_top = img1.offsetTop - centerY
        var base_angle = -Math.atan2(img1_left,img1_top)

        console.log('nimate2_img1_left:' + base_angle)
        // var animate2_img1_left =

        $(document).ready(function(){
            for (;count * ( baseSpeed * speed ) < angle;){
                posX = ( Math.sin( count * ( baseSpeed * speed ) + base_angle )* radius + centerX );
                posY = ( Math.cos( count * ( baseSpeed * speed ) + base_angle )* radius + centerY );
                $("#content1_img1").animate({left: -135+width_reduce/2+'px', top: -10 + refer_reduce +'px'},5);
                count++

            }
            // $("#content1_img2").animate({left: -135+width_reduce/2+'px', top: -10 + refer_reduce +'px'},20);
            // $("#content1_img3").animate({left: -135+width_reduce/2+'px', top: -10 + refer_reduce +'px'},20);
            // $("#content1_img5").animate({left: -135+width_reduce/2+'px', top: -10 + refer_reduce +'px'},20);
        });
    }




}

