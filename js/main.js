$('document').ready(function(){

    
    
    $('#cover-bg').click(function(){
        $('#pop-up').animate({"opacity":"0"},400,function(){
            $('#pop-up').removeClass('d-block');
        });
    })
    
    //手機板(sm) + 平板(md) : #new-container:hover

    $('#new-container').mouseenter(function(e){


        $('#left-top').animate({"left": "-900px"},1000,function(e){
            $('#left-top').addClass('d-none');
        });
        $('#right-top').animate({"top": "-900px"},1000,function(e){
            $('#right-top').addClass('d-none');
        });
        $('#right-bottom').animate({"right": "-900px"},1000,function(e){
            $('#right-bottom').addClass('d-none');
        });
        $('#left-bottom').animate({"top": "900px"},1000,function(e){
            $('#left-bottom,#center-decor-square').addClass('d-none');
        });
    });

    /* $('#new-container').mouseleave(function(e){


        $('#left-top,#right-top,#right-bottom,#left-bottom,#center-decor-square').stop().removeClass('d-none');
        $('#left-top').animate({"left": "0"},500);
        $('#right-top').animate({"top": "0"},500);
        $('#right-bottom').animate({"right": "0"},500);
        $('#left-bottom').animate({"top": "50%"},500);
    }); */
    
    function windowSize() {
        // let width=$(window).width()+"px";
        let height=$(window).height()+"px";
        $('#new-container').css({"width":"100%","height":height});

        $('a#btn').click(function(e){
            $('#pop-up').addClass('d-block').animate({"opacity":"1"},600);
            $('#left-top,#right-top,#right-bottom,#left-bottom,#center-decor-square').addClass('d-none');
            let popUpItemHeight=$('.pop-up-item').height()+"px";
            $('#pop-up .pop-up-item').css({"line-height":popUpItemHeight});
            e.preventDefault();
        });
        
        /* if($(window).width()>768){
            $('.main-bg-l-1').
        }
 */
    };
    $(window).resize(function() {
        windowSize();
    });
    windowSize();

   

});