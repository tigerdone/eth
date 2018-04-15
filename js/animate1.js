
// var dom1 = document.getElementsByClassName('head_content')
var head_bg = document.getElementById('ball_nebula')
var left = head_bg.style.left
console.log(left)
// document.addEventListener("wheel", myFunction);
window.onscroll = function() {
    console.info(window.scrollY);

    var scrollY = window.scrollY;
    var alpha = 1 - scrollY/400;
    var width_reduce = scrollY/4*3;
    var height_reduce = width_reduce/2;
    var refer_reduce = height_reduce*5/7;

    console.log('h12:'+scrollY);

    // console.log('alpha:'+alpha);
    // console.log('h12:'+h12);
    //506为不动点，1440*717高度
    if(alpha<0){
        alpha = 0
    }
    $(document).ready(function(){
        $("#main_head").fadeTo(30,alpha);
        $("#ball_nebula").animate({left: -135+width_reduce/2+'px', top: -10 + refer_reduce +'px', width: (1201-width_reduce)+'px'},20);
        // $("#ball_nebula").animate({top: -35+'px'},2000);
    });

}

