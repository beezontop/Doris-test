$('document').ready(function(){

    $('#title-btn').click(function(e){
        $('#pop-up').addClass('d-block');
        $(e.target).preventDefault();
    });


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
            $('#left-bottom').addClass('d-none');
        });
    });

    $('#new-container').mouseleave(function(e){

        $('#left-top,#right-top,#right-bottom,#left-bottom').removeClass('d-none');
        $('#left-top').animate({"left": "0"},1000);
        $('#right-top').animate({"top": "0"},1000);
        $('#right-bottom').animate({"right": "0"},1000);
        $('#left-bottom').animate({"top": "50%"},1000);
    });
    
    function windowSize() {
        // let width=$(window).width()+"px";
        let height=$(window).height()+"px";
        $('#new-container').css({"width":"100%","height":height});
    };
    $(window).resize(function() {
        windowSize();
    });
    windowSize();

   

});