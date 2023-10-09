function RecalculateCarousel(tc){
    let thumbSize = 0.1;
    let thumbsContainerSize = 0.6;
    let thumbsVisible = thumbsContainerSize / thumbSize;
    md = window.mobileCheck() ? thumbSize * screen.width  : thumbSize * window.innerWidth ;
    minLeft = -(md * thumbsVisible) * (Math.floor(tc /  thumbsVisible)); //(window.innerWidth * 0.6 * -1) + 5; 

    maxLeft = -1; // (window.innerWidth * 0.6);
    cw = md * thumbsVisible; //#carousel width
    // console.log('minleft:'+minLeft);
     $('#carousel #under .thumb').css('left',0); ///animate({left:left+cw}).promise().done(function(){
     $('#carousel2 #under .thumb').css('left',0); ///animate({left:left+cw}).promise().done(function(){
    return [minLeft, maxLeft, cw];

}

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
$(document).ready(function(){
//    debug = $('<div id="debug" style="position:fixed;top:0;left:0;z-index:9999;width:200px;height:150px;color:red;outline:2px solid red;">Debug</div>'); $('body').append(debug);
    mana = $('#btnDesc').html();

    $(window).on('resize', function(){
        ResizeVid();
        RecalculateCarousel();
        // window too tall
    });
    $('#food').on('click',function(){
        let txt = "With 5 acres of tropical soil at our disposal, imagine bananas, goats, avocados, chickens, and more — What would you help us grow?<br>🫑🥔🥒🥕🍅🐄🐖🌻🧺🌾";
        FadeShow(txt,$(this));
   });
    $('#retreat').on('click',function(){
        let txt = "We have plans for farms, treehouses, domes, decks, and more — What would you like to build together? <br> 🪚🪵🪓🗜️🏡";

        FadeShow(txt,$(this));
    });
    $('#tech').on('click',function(){
        let txt = 'Amenities include 250 Mbps Starlink, dedicated coworking desks, fresh local coffee, and the San Juan Tech and Web3 scene.<br> 🖥️👨‍💻📱👩‍💻💻🕹️🖨️⚡📡';
        FadeShow(txt,$(this));
    });

    $('#mana').on('click',function(){
        let txt = mana;
        FadeShow(txt,$(this));
    });

    function FadeShow(txt,$this){
        $('#top2 .item').each(function(){$(this).removeClass('selected');});
        $this.addClass('selected');
        $('#old').html($('#btnDesc').html());
        $('#old').css('opacity',1);
        $('#old').animate({opacity:0});
        $('#btnDesc').css('opacity',0);
        $('#btnDesc').animate({opacity:1})
        $('#btnDesc').fadeIn();
        $('#btnDesc').html(txt);
        $(window).scrollTop($('#btnDesc').offset().top - 100); 
    }
    function ResizeVid(){
        // window too short (take into account the header of height)
        th = $('#top').height();
        wh = window.mobileCheck() == true ? screen.height * .7 : window.innerHeight * .7;
        ww = window.mobileCheck() == true ? screen.width : window.innerWidth;
        $('#videoCover').css('height',wh);
        ar = 1.777778;
        //$('#debug').text('w:'+screen.width);
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
      // console.log('Played the video');
    });

    ResizeVid();
    InitCarousel1();
    InitCarousel2();

});

var carousel_1_index = 0;
var carousel_2_index = 0;
var clicked = false;

function InitCarousel1(){
    $('#carousel .navLeft').on('click',function(){
        if (carousel_1_index > 0) carousel_1_index--;
        img = carousel_1_index+1+'.jpg';
        $('#carousel .image').css('background-image','url(/static/img/'+img+')');
    });
    $('#carousel .navRight').on('click',function(){
//        console.log("r. len:"+$('#carousel .thumbsContainer .thumb').length);
        if (carousel_1_index < $('#carousel .thumbsContainer .thumb').length-1) carousel_1_index++;
        img = carousel_1_index+1+'.jpg';
        $('#carousel .image').css('background-image','url(/static/img/'+img+')');
    });


    $('#carousel .image').css('background-image','url(/static/img/1.jpg)');
  
    let numThumbs = 16;
    let thumbsPrefix = "prop_";
    for(let i=0;i<numThumbs;i++){
        $('#carousel .thumbsContainer .thumbs').append('<div class="thumb"></div>');

    }
    let tc = $('#carousel .thumbsContainer .thumb').length;
    $('#carousel .thumbsContainer .thumb').each(function(){
        let i = $(this).index();
        $(this).css('background-image','url(/static/img/'+(i+1)+'.jpg)');
    });
    $('#carousel #under .thumb').on('click',function(){
        img = $(this).index()+1+'.jpg';
        $('#carousel .image').css('background-image','url(/static/img/'+img+')');

    });
    let [minLeft, maxLeft, cw] = RecalculateCarousel(tc);

    $('#carousel #under .left').on('click',function(){
        if (clicked) return;
        clicked = true;
        left = parseInt($('#under .thumb').css('left'));
        if (left < maxLeft){
            $('#carousel #under .thumb').animate({left:left+cw}).promise().done(function(){
                clicked = false;
            }); 
        } else {
            $('#carousel #under .thumb').animate({left:maxLeft}).promise().done(function(){
                clicked = false;
            }); 

        }
    });
    $('#carousel #under .right').on('click',function(){
        console.log('r. clicked:'+clicked);
        if (clicked) return;
        clicked = true;
        left = parseInt($('#carousel #under .thumb').css('left'));
        if (left > minLeft + 5){
            console.log("..l")
            left = parseInt($('#carousel #under .thumb').css('left'));
            $('#carousel #under .thumb').animate({left:left-cw}).promise().done(function(){
                clicked = false;
            }); 
        } else {
            console.log("..2. minleft:"+minLeft)
            $('#carousel #under .thumb').animate({left:minLeft}).promise().done(function(){
                clicked = false;
            }); 
        }
    });

}
function InitCarousel2(){
    let carouselInterval=null;
    $('#carousel2 .navLeft').on('click',function(){
        if (carousel_2_index > 0) carousel_2_index--;
        img = carousel_2_index+1;
        $('#carousel2 .image').css('background-image','url(/static/img/a'+img+'.jpg)');
        clearInterval(carouselInterval);
    });
    $('#carousel2 .navRight').on('click',function(){
//        console.log("r. len:"+$('#carousel2 .thumbsContainer .thumb').length);
        if (carousel_2_index < $('#carousel2 .thumbsContainer .thumb').length-1) carousel_2_index++;
        img = carousel_2_index+1;
        $('#carousel2 .image').css('background-image','url(/static/img/a'+img+'.jpg)');
        clearInterval(carouselInterval);
    });


    $('#carousel2 .image').css('background-image','url(/static/img/a1.jpg)');
  
    let numThumbs = 11;
    let thumbsPrefix = "prop_";
    for(let i=0;i<numThumbs;i++){
        $('#carousel2 .thumbsContainer .thumbs').append('<div class="thumb"></div>');

    }
    let tc = $('#carousel2 .thumbsContainer .thumb').length;
//    console.log('tc:'+tc);
    $('#carousel2 .thumbsContainer .thumb').each(function(){
        let i = $(this).index() + 1;
        $(this).css('background-image','url(/static/img/'+'a'+i+'.jpg)');
        clearInterval(carouselInterval);
    });
    $('#carousel2 #under .thumb').on('click',function(){
        img = $(this).index()+1; 
        $('#carousel2 .image').css('background-image','url(/static/img/a'+img+'.jpg)');
        clearInterval(carouselInterval);

    });
    let [minLeft,maxLeft,cw] = RecalculateCarousel(tc);

    var clicked = false;
    $('#carousel2 #under .left').on('click',function(){
        if (clicked) return;
        clearInterval(carouselInterval);
        clicked = true;
        left = parseInt($('#under .thumb').css('left'));
        if (left < maxLeft){
            $('#carousel2 #under .thumb').animate({left:left+cw}).promise().done(function(){
                clicked = false;
            }); 
        } else {
            $('#carousel2 #under .thumb').animate({left:maxLeft}).promise().done(function(){
                clicked = false;
            }); 

        }
    });
    $('#carousel2 #under .right').on('click',function(){
        if (clicked) return;
        clearInterval(carouselInterval);
        clicked = true;
        left = parseInt($('#carousel2 #under .thumb').css('left'));
        if (left > minLeft + 5){
            left = parseInt($('#carousel2 #under .thumb').css('left'));
            $('#carousel2 #under .thumb').animate({left:left-cw}).promise().done(function(){
                clicked = false;
            }); 
        } else {
            $('#carousel2 #under .thumb').animate({left:minLeft}).promise().done(function(){
                clicked = false;
            }); 
        }
    });

    carouselInterval = setInterval(function(){
        if (carousel_2_index < 4) carousel_2_index++;
        else carousel_2_index=0;
        img = carousel_2_index+1;
        $('#carousel2 .image').css('background-image','url(/static/img/a'+img+'.jpg)');
    },2500)

}


