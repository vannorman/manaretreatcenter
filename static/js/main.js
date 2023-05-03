$(document).ready(function(){
    $(window).on('resize', function(){
        ResizeVid();
        // window too tall
    });
    $('#food').on('click',function(){
        let txt = "With 5 acres of tropical soil at our disposal, imagine bananas, goats, avocados, chickens, and more — What would you help us grow?<br>🫑🥔🥒🥕🍅🐄🐖🌻🧺🌾";
        FadeShow(txt);
   });
    $('#perm').on('click',function(){
        let txt = 'Help tend the land';
        FadeShow(txt);
    });
    $('#retreat').on('click',function(){
        let txt = "Co-create an amazing tropical getaway";

        FadeShow(txt);
    });
    $('#eco').on('click',function(){
        let txt = 'Live in an awesome tech enabled remote community with Starlink';
        FadeShow(txt);
    });

    function FadeShow(txt){
        $('#old').html($('#btnDesc').html());
        $('#old').css('opacity',1);
        $('#old').animate({opacity:0});
        $('#btnDesc').css('opacity',0);
        $('#btnDesc').animate({opacity:1})
        $('#btnDesc').fadeIn();
        $('#btnDesc').html(txt);
 
    }
    function ResizeVid(){
        // window too short (take into account the header of height)
        th = $('#top').height();
        wh = window.innerHeight * .7;
        ww = window.innerWidth;
        ar = 1.777778;

        if (ww < 875){
            $('iframe').attr('height',wh).attr('width',wh*ar).css('left',(ww - (wh*ar))/2);
        } else {
            console.log('ww:'+ww+', wh*ar:'+(wh*ar));
            $('iframe').attr('width',ww + (ww - (wh*ar))).attr('height',ww/ar).css('left',-(ww - (wh * ar))/2);

        }
        return;
        if (ww / (wh - th) > ar){
            // window was "too wide" so make height limiting facator
            $('iframe').attr('height',wh-th).attr('width',(wh-th)*ar);
            console.log('a');
        } else {
            console.log('b');
            // window was "too tall" so make width limiting facator
            $('iframe').attr('width',ww).attr('height',(ww/ar));

        }


    }

    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.on('play', function() {
      console.log('Played the video');
    });

    ResizeVid();
});

