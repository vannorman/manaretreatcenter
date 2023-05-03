$(document).ready(function(){
    mana = $('#btnDesc').html();
    $(window).on('resize', function(){
        ResizeVid();
        // window too tall
    });
    $('#food').on('click',function(){
        let txt = "With 5 acres of tropical soil at our disposal, imagine bananas, goats, avocados, chickens, and more — What would you help us grow?<br>🫑🥔🥒🥕🍅🐄🐖🌻🧺🌾";
        FadeShow(txt);
   });
    $('#retreat').on('click',function(){
        let txt = "The campus is mostly undeveloped now, and we have plans for domes, decks, and more — What would you like to build together? <br> 🪚🪵🪓🗜️🏡";

        FadeShow(txt);
    });
    $('#tech').on('click',function(){
        let txt = 'Amenities include 250 Mbps Starlink, dedicated coworking desks, fresh local coffee, and the San Juan Tech and Web3 scene.<br> 🖥️👨‍💻📱👩‍💻💻🕹️🖨️⚡📡';
        FadeShow(txt);
    });

    $('#mana').on('click',function(){
        let txt = mana;
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
            $('iframe').attr('width',ww + (ww - (wh*ar))).attr('height',ww/ar).css('left',-(ww - (wh * ar))/2);
        }
    }

    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.on('play', function() {
        $('#videoPlay').hide();
      console.log('Played the video');
    });

    ResizeVid();
});

