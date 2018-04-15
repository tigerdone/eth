
// var dom1 = document.getElementsByClassName('head_content')
// var main_head = document.getElementById('main_head')

// document.addEventListener("wheel", myFunction);
window.onscroll = function() {
    console.info(window.scrollY);

    // var h11 = window.pageXOffset;
    var h12 = window.scrollY;
    console.log('h12:'+h12);

    if(h12 > 0){
        var alpha = 1 - h12/280;
        console.log('alpha:'+alpha);
        console.log('h12:'+h12);

        if(alpha<0){
            alpha = 0
        }
        $(document).ready(function(){
            $("#main_head").fadeTo(30,alpha);
        });
    }
    // console.log('window.pageXOffset'+h11);
    // console.log('window.pageYOffset'+h12);
}

